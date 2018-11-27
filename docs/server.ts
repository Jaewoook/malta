import { app, createServer } from "./app";

const port = parseInt(process.env.PORT, 10) || 3400;

app.prepare().then(() => {
  const server = createServer();

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
