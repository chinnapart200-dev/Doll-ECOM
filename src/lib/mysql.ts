import mysql from "mysql2/promise";

const host = process.env.MYSQL_HOST ?? "127.0.0.1";
const port = Number(process.env.MYSQL_PORT ?? "3306");
const user = process.env.MYSQL_USER ?? "root";
const password = process.env.MYSQL_PASSWORD ?? "";
const database = process.env.MYSQL_DATABASE ?? "ecommerce_doll";

export const hasMysqlConfig = Boolean(database && user);

export const pool =
  hasMysqlConfig && host
    ? mysql.createPool({
        host,
        port,
        user,
        password,
        database,
        waitForConnections: true,
        connectionLimit: 10,
        namedPlaceholders: true,
      })
    : null;

export async function queryDb<T>(sql: string, values: readonly unknown[] = []) {
  if (!pool) {
    throw new Error("MySQL is not configured. Check MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.");
  }

  const [rows] = await pool.query(sql, values as never[]);
  return rows as T[];
}

export async function executeDb(sql: string, values: readonly unknown[] = []) {
  if (!pool) {
    throw new Error("MySQL is not configured. Check MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.");
  }

  const [result] = await pool.execute(sql, values as never[]);
  return result;
}
