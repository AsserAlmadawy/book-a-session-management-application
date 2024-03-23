import express from "express";
import type { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

app.use(express.static("../../frontend/src"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port: number = 5000;

app.listen(port, () =>
  console.log(`The backend server is running on http://localhost:${port}.`)
);