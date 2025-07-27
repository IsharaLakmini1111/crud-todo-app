const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async ()=>{
    try{
        const connectDb = await mongoose.connect(process.env.DB_CONNECTION_STRING);

        console.log("Database connected.");
    }catch(error){
        console.error("Database connection failed.")
    }
};
module.exports = connectToDb;