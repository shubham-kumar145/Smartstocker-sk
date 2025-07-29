const mongoose = require('mongoose')

async function main(){
    await mongoose.connect("mongodb+srv://shubhamkr5923:5923%40S.kumar@shubhamdata.ougm4ij.mongodb.net/Inventory");
    console.log("db connected");
    
}

module.exports = main


