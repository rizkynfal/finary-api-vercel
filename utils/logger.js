const { createLogger, format, transports } = require("winston");
const { combine, label, timestamp } = format;
const logFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${new Date(timestamp)} [${label}] ${level}: ${message}`;
});
const logger = createLogger({
  level: "info",
  format: combine(label({ label: "server" }), timestamp(), logFormat),
  defaultMeta: { service: "finary-api" },
  exitOnError: false,
  colorize: true,
  transports: [
    new transports.File({
      filename: "log/error.log",
      level: "error",
    }),
    new transports.File({ filename: "log/combined.log" }),
  ],
});

module.exports = logger;
