const { DB } = require("./conn");

const db = new DB();
class MigrationDB {
  constructor() {
    this.migrate();
  }
  async migrate() {
    await userTable();
    await saveYourFutureTable();
    await catatanTable();
  }
}
async function userTable() {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id bigserial NOT NULL, 
    name varchar(255) NOT NULL, 
    username varchar(255) NOT NULL, 
    password varchar(255) NOT NULL, 
    PRIMARY KEY (id))`;
  await db.query(sql);
}
async function saveYourFutureTable() {
  const sql = `CREATE TABLE IF NOT EXISTS public.saveyourfuture(
    id bigserial NOT NULL,
    username character varying NOT NULL,
    tahun character varying COLLATE pg_catalog."default" NOT NULL,
    income numeric NOT NULL,
    pengeluaran numeric NOT NULL,
    saving character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT saveyourfuture_pkey PRIMARY KEY (id))
    TABLESPACE pg_default;
    ALTER TABLE IF EXISTS public.saveyourfuture OWNER to postgres;`;
  await db.query(sql);
}
async function catatanTable() {
  const sql = `CREATE TABLE IF NOT EXISTS public.catatan(
    id bigserial NOT NULL, 
    username character varying NOT NULL,
    tanggal character varying COLLATE pg_catalog."default" NOT NULL,
    kategori_catatan int DEFAULT 0,
    kategori character varying NOT NULL,
    jumlah_uang character varying NOT NULL,
    keterangan character varying DEFAULT '',
    CONSTRAINT catatan_pkey PRIMARY KEY (id))
    TABLESPACE pg_default;
    ALTER TABLE IF EXISTS public.catatan OWNER to postgres;`;
  await db.query(sql);
}
module.exports = MigrationDB;
