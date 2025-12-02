import { pool } from "../../config/db";

const createUser = async (name: string, email: string) => {
  const result = await pool.query(
    `INSERT INTO users(name, email) VALUES($1, $2)`,
    [name, email]
  );
  return result;
};

export const userServices = {
  createUser,
};
