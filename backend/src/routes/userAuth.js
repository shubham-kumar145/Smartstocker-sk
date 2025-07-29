const express = require('express');
const { register, login, logout, adminRegister, deleteprofile, getAllMember } = require('../controllers/userAuthent');
const userMiddleware = require('../middleware/userMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const getGeminiResponse = require('../aichat/chat');


const authRouter = express.Router();
console.log("333333");

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userMiddleware, logout);
authRouter.get('/get-all-member', adminMiddleware, getAllMember)
authRouter.post('/admin/register', adminMiddleware, adminRegister)
authRouter.delete('/deleteprofile', userMiddleware, deleteprofile)
authRouter.get('/check', userMiddleware, (req, res) => {
    const reply = {
        firstName: req.result.firstName,
        emailId: req.result.emailId,
        _id: req.result._id,
        role: req.result.role
    }
    res.status(200).json({
        user: reply,
        message: "Valid User"
    })
})
console.log("ewqedq");

authRouter.post('/api/chat', userMiddleware, async (req, res) => {
    const { message } = req.body;
    console.log(message);


    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const reply = await getGeminiResponse(message);
        res.json({ reply });
    } catch (err) {
        console.error("❌ Server Error:", err.message);
        res.status(500).json({ error: "Something went wrong." });
    }
});



module.exports = authRouter;
