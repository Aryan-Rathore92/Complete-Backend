const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect("mongodb+srv://yt:8ATgJzNXSvre88wg@cluster0.ncdways.mongodb.net/halley");

    console.log("Connected to DB");
    
}

module.exports = connectDB