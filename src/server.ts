import express, { Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";

const app = express();
const port = config.port;

initDB();

app.use(express.json());

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello");
});

app.use("/users", userRoutes);

app.use("/users");

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      req.params.id,
    ]);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
