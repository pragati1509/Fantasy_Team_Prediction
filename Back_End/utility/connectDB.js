const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/cricketDB');
conn = mongoose.connection;


module.exports = conn;