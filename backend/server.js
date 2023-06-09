const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB.js");
const Task = require("./model/taskModel.js");
const taskRoutes = require("./routes/taskRoute.js");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/tasks", taskRoutes);

// Routes (rutas)
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
    
  } catch (error) {
    console.log(error);
  }
}

startServer();