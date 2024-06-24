const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require("dotenv");
dotenv.config();
const taskRoutes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandler');


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
