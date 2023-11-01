import { deleteall, findAllUser, main } from "./script.js";
import express from "express";
import dotenv from "dotenv";
const app = express();
const PORT = 8000;

dotenv.config();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", async (req, res) => {
  const users = await findAllUser();
  res.json({
    users,
  });

  app.post("/", async (req, res) => {
    try {
      main({ name: "sdf", email: "sdfsd" });
    } catch (error) {
      if (error) throw error;
    }
  });
});
