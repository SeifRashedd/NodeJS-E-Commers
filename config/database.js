const mongoose = require('mongoose');

const dbConnection = () => {
    // connect to database
    
    mongoose.connect(process.env.DP_URL).then((conn) => {
        console.log(`Database connected successfully ${conn.connection.host}`);
    }).catch((err) => {
        console.log('Database connection failed', err);
        process.exit(1);
    });
}

module.exports = dbConnection;