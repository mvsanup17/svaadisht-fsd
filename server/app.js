import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import UserReviews from './models/reviews.js';
import UploadDetail from './models/uploads.js';


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
      cb(null, 'public/details')
    },
    filename: (req,file,cb) =>{
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
  
const upload = multer({
    storage:storage
})

app.post('/uploaddata', upload.single('file'),(req, res) => {
    UploadDetail.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
    return res.send({msg: "Uploaded Successfully"})
})

app.get('/getimage',(req,res)=>{
    UploadDetail.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

mongoose.connect('mongodb+srv://iamvsanup:3raLvtJYwOZ0FTVG@driveready.0udnccc.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(()=> 
    console.log("Connected to Database & Listening to localhost port 5000")
)
.catch((err)=> console.log(err));

app.post('/addsubmit',(req,res,next)=>{
    console.log(req.body.revForm);
    const {name, email, comments} = req.body.revForm;

    const rev = new UserReviews({
        name,
        email,
        comments
    });
    try{
        rev.save();
        sendEmail(name,email);
        return res.send({msg: "Review Submitted Successfully"})
    }
    catch(err){
        console.log(err)
    }
})

function sendEmail(name, userEmail) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'iamvsanup@gmail.com',
        pass: 'qind hkxy dzbi czqm'
      }
    });
  
    var mailOptions = {
      from: 'iamvsanup@gmail.com',
      to: userEmail, // Use the user's email provided in the form
      subject: 'Thanks for submitting your review',
      text: `Dear ${name},\n\nThanks for submitting your review. Hope you like our website!!\n\n-Svaadisht`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}


app.get('/getrev',async(req,res,next)=>{
  let revdata
  try{
      revdata=await UserReviews.find()
  }
  catch(err){
      console.log(err)
  }
  if(!revdata){
      console.log("no reviews found in the data")
  }
  return res.status(200).json({revdata})
})


app.delete('/deleterev/:id', async (req,res,next)=>{
  const _id = req.params.id
  let revdata
  try{
      revdata = await UserReviews.findByIdAndDelete(_id)
  }
  catch(err){
      console.log(err)
  }
  if(!revdata){
      return res.status(400).json({msg:"Unable to Delete"})
  }
  return res.send({msg:"Deleted"})
})