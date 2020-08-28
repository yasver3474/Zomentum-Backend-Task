const mongoose = require('mongoose');

// Connecting to the MongoDB Databse
mongoose.connect('mongodb://127.0.0.1:27017/ticket-mangaer-api',{
    useNewUrlParser:true,
    useCreateIndex:true
});

