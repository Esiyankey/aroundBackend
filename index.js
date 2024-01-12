const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const {sequelize} = require("./database/sequelizeORM");
const port = "5000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server running on port:${port}`);
});

//syncing the database
sequelize.sync({ force: false, alter: true }).then(() => {});
