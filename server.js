import express from "express";
import { initFileRouter } from "node-file-router";

const port = 4000;
const app = express();

const fileRouter = await initFileRouter();
app.use(fileRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
