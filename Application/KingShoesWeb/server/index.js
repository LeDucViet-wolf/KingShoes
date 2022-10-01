import express from "express";
import axios from "axios";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 6969;

import * as nodemailer from 'nodemailer'; 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.post('/sendMail', async (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'tuandat.blueskytechco@gmail.com',
          pass: 'dqxzjsibqxktvbtr'
        }
    });
    
    var mailOptions = {
    from: 'tuandat.blueskytechco@gmail.com',
    to: req.body.dt,
    subject: 'newsletter',
    text: 'Now you can receive our promotion service, thank you!'
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        res.json("Please check your email")
        // var config2 = {
        // method: 'post',
        // url: 'http://38.242.236.227:3456/api/verifications/create/',
        //     headers: {
        //     'Content-Type': 'application/json'
        // },
        // data: data
        // };
        // axios(config2)
        // .then(function (response) {
        //     res.json("Please check your email")
        // })
        // .catch(function (error) {
        //     res.json("Your confirmation link is expired or invalid.")
        // });
    }
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})