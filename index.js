import express from "express";
import db from "./DB/index.js";
import path from "path";

const PORT = 3000;
const app = express();
//__dirname 선언
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../mindkit/main.html"));
});
app.get("/main", (req, res) => {
  const query = "SELECT * from topics";
  db.query(query, (err, result) => {
    err ? res.send(err) : res.render("main", { data: result });
  });
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
