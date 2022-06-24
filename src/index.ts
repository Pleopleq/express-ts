import express from "express";
import diariesRoutes from "./routes/diaries";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/diaries/", diariesRoutes);

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
