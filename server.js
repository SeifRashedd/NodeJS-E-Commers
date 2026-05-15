const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: 'config.env' });

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

