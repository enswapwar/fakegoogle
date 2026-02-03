import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/input", (req, res) => {
  console.log("受信:", req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
