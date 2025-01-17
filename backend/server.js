const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const userController = require("./controllers/user.js"); 
const expenseController = require("./controllers/expense.js"); 
const palidrome = require("./controllers/palindrome.js"); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/user",userController)
app.use("/api/expense",expenseController)
app.use("/api/palindrome",palidrome)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});