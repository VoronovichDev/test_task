import express from "express";
import multer from "multer";
import { winstonLogger, s3Config } from "./config.js";

const app = express();
const port = 3000;

const logger = winstonLogger;

const s3 = s3Config;

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/upload", upload.single("video"), (req, res) => {

  const params = {
    Bucket: "bucket",
    Key: req.file.originalname,
    Body: req.file.buffer,
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      logger.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
    } else {
      logger.info("File uploaded successfully:", data);
      res.status(200).send("File uploaded successfully");
    }
  });
});

app.get("/", (_, res) => {
  const params = {
    Bucket: "bucket",
  };

  s3.listObjects(params, (err, data) => {
    if (err) {
      logger.error("Error listing objects:", err);
    } else {
      logger.info("Objects in bucket:", data.Contents);
      res.status(200).send(data.Contents);
    }
  });
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
