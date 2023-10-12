const express = require("express")
const app = express();
const http = require("http");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const server = http.createServer(app);
app.use(cookieParser());

const dotenv = require("dotenv");
//dotenv config
dotenv.config();

const connectDB = require("./config/db");
//mongodb connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev")); 
// cors
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

const port = process.env.PORT || 8080;
//listen port
server.listen(port, () => {
  console.log(
    `server running in ${process.env.NODE_MODE} Mod on port ${process.env.PORT}`
      .bgCyan.white
  );
});



const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");


app.use("/api", userRouter);
app.use("/api/admin", adminRouter);