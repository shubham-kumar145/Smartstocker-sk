require('dotenv').config();
const express = require('express');
const app = express();
const main = require("./config/db");
const redisClient = require('./config/redis')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/userAuth');
const productRouter = require('./routes/productAuth');
const adminRoutor = require('./routes/adminAuth');
const fileUpload = require("express-fileupload")  //1
const cors = require('cors'); // ✅ Import CORS
const getGeminiResponse = require('./aichat/chat');
app.use(express.json());
app.use(cookieParser())

const allowedOrigins = [
    'http://localhost:5173',
    'https://smartstocker1.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));



app.use(fileUpload({
    useTempFiles: true
}))


app.use('/user', authRouter)
app.use('/product', productRouter)
app.use('/admin', adminRoutor)


const InitalizeConnection = async () => {
    try {

        await Promise.all([main(), redisClient.connect()]);
        console.log("DB Connected");

        app.listen(5000, () => {
            console.log("Server listening at port number: 5000");
        })

    }
    catch (err) {
        console.log("Error: " + err);
    }
}


InitalizeConnection();
