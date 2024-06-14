const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

const PORT = 3000;

const app = express();

const DB =
  "mongodb+srv://sahilbhosale700:Ph%40ntom123@cluster0.kvyhuaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT,'0.0.0.0' ,() => {
  console.log(`Connected at port ${PORT}`);
});
