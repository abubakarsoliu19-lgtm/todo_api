const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/todoRoutes");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


mongoose
  .connect(process.env.LIVE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connected Error: ", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("hello World!");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
