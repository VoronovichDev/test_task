import winston from "winston";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

export const winstonLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export const s3Config = new AWS.S3({
  endpoint: process.env.AWS_ENDPOINT,
  s3ForcePathStyle: true,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
