import { createConnection } from "mysql2";

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lunes",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default connection;
