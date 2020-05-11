import express from "express";

import dotenv from "dotenv";
import socket from "socket.io";
import { createServer } from "http";

import "./core/db";
import createRoutes from "./core/routes";

const app = express();
const http = createServer(app);
const io = socket(http);

createRoutes(app, io);
dotenv.config();

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("test command", "Hello");

  socket.on("test", (msg) => {
    console.log("CLIENT SAY: " + msg);
  });
});

http.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
