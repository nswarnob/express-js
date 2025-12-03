import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";

const router = express.Router();

// router.post("/", async (req: Request, res: Response) => {
//   const { name, email } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO users(name, email) VALUES($1, $2)RETURNING *`,
//       [name, email]
//     );

//     res.status(201).json({
//       success: false,
//       message: "Data inserted successfully.",
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

router.post("/", userControllers.createUser);

router.get("/", userControllers.getUser);

export const userRoutes = router;
