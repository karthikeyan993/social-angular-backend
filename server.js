const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const postsRoutes = require("./routes/posts.routes");

require("./config/db"); // MongoDB connection

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use("/api", usersRoutes);
app.use("/api", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
