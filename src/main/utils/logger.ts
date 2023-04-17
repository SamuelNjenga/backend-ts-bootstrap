import winston, { format } from "winston";

const { combine, timestamp, label, printf, colorize } = format;

class Logger {
  private myFormat: winston.Logform.Format;

  constructor() {
    this.myFormat = printf((info: winston.Logform.TransformableInfo) => {
      if (info instanceof Error) {
        return `${info.timestamp} [${info.label}] ${info.level}: ${info.message} ${info.stack}`;
      }
      return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
    });
  }

  public logger(): winston.Logger {
    return winston.createLogger({
      level: "info",
      format: combine(
        colorize(),
        format.splat(),
        label({ label: "" }),
        timestamp(),
        this.myFormat
      ),
      transports: [new winston.transports.Console()],
    });
  }
}

export = Logger;
