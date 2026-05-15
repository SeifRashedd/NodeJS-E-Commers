const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
dotenv.config({ path: 'config.env' });


// connect to database

mongoose.connect(process.env.DP_URL).then((conn) => {
    console.log(`Database connected successfully ${conn.connection.host}`);
}).catch((err) => {
    console.log('Database connection failed', err);
    process.exit(1);
});

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`${process.env.NODE_ENV} mode`);
}




app.get('/', (req, res) => {
    res.send("App is running with Docker");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

