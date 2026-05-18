const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const recipeRoutes = require("./routes/recipeRoutes");

const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

dotenv.config();

const startServer = async () => {
  await connectDB();

  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("The Global Kitchen API Running...");
  });

  app.use("/recipes", recipeRoutes);

  app.use(notFound);

  app.use(errorHandler);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
});
