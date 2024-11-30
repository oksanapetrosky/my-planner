const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./TaskRoutes');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(cors());

//database connection   
mongoose
    .connect(process.env.MONGODB_LINK) // Just use the connection string
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));


//Routes

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});