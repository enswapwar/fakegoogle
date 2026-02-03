import express from "express";

const app = express();
app.use(express.json());
app.use("/public", express.static("public"));

app.post("/input", (req, res) => {
  console.log("受信:", req.body);
  res.sendStatus(200);
});

app.listen(3000);
