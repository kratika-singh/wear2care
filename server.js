import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();
const port =process.env.PORT || 8080;
// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to wear2care",
  });
});
// PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
