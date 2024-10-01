const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended:false}))
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,PUT,PATCH,POST,DELETE',
    credentials: true 
};

app.use(cors(corsOptions));


app.get('/', (req,res)=>{
    return res.send("Hello")
})

app.post('/send', async(req, res)=>{
    const {subject, message,email, name} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
      })
    const info = {
        from : email,
        to:process.env.EMAIL,
        subject: subject,
        text:message,
        html: `<p>${message}</p>`
    }
    try{
        const mesgsent = await transporter.sendMail(info);
        console.log("Mesg sent ", mesgsent.messageId);
        return res.status(200).json({"message" : "Message sent successfully", "success" : true});
    }catch(err){
        console.log(err);
        return res.status(500).json({"message":err, "success":false});
    }
})

app.listen(PORT, ()=>{
    console.log("server is running on ", PORT);
})