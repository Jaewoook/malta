import * as next from "next";
import * as express from "express";

const { join } = require("path");
const { parse } = require("url");

export const app = next({ dir: "./docs", dev: true }); // TODO isLocalhost로 변경

const handle = app.getRequestHandler();

export const createServer = () => {
  const server = express();

  server.get("/static/*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = [
      "/robots.txt",
    ];
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, "../docs/static", parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      return handle(req, res, parsedUrl);
    }
  });

  return server;
};
