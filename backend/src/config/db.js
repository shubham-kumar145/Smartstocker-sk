const mongoose = require('mongoose')

async function main(){
    await mongoose.connect("mongodb+sb.net/Inventory");
    console.log("db connected");
    
}

module.exports = main



