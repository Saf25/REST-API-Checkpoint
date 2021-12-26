let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.use(express.json());

//dotenv config
require("dotenv").config({ path: "./config/.env" });

//main app
app.use("/api/", require("./routes/userRoutes"));
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Database connected"))
);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log(`DB connected on Port ${process.env.PORT}`);
});
