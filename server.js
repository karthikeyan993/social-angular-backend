const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");

require("./config/db"); // MongoDB connection

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:4200", // Replace with your frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Routes
app.use("/api", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
