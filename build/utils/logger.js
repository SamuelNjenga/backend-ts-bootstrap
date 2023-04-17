"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const winston_1 = __importStar(require("winston"));
const { combine, timestamp, label, printf, colorize } = winston_1.format;
class Logger {
    constructor() {
        this.myFormat = printf((info) => {
            if (info instanceof Error) {
                return `${info.timestamp} [${info.label}] ${info.level}: ${info.message} ${info.stack}`;
            }
            return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
        });
    }
    logger() {
        return winston_1.default.createLogger({
            level: "info",
            format: combine(colorize(), winston_1.format.splat(), label({ label: "" }), timestamp(), this.myFormat),
            transports: [new winston_1.default.transports.Console()],
        });
    }
}
module.exports = Logger;
