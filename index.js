import express from "express";
import path from "path";

const PORT = 3000;
const app = express();
//__dirname 선언
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../mindkit/index.html"));
});

app.listen(PORT, () => {
  console.log(`listen the port ${PORT}`);
});
