import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import "dotenv-defaults/config.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";


import mongo from "./backend/src/mongo.js";
import Account from './backend/src/routes/api/account.js'
import Profile from './backend/src/routes/api/profile.js'
import Task from './backend/src/routes/api/task.js'
import TaskApplicant from './backend/src/routes/api/taskApplicant.js'

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json())
app.use("/api/account", Account, Profile);
app.use("/api/task", Task, TaskApplicant);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


mongo.connect();

server.listen(port, () => {
  console.log(`🚀 Server Ready at ${port}! 🚀`);
});
