const express = require('express');
const multer = require('multer');
const postModel = require("./models/post.model")
const uploadFile = require('./services/storage.service');
const cors = require('cors');



const app = express();

app.use(express.json());// Use this middleware for covert data into readable form and this use for raw text
app.use(cors()); // This is also a middleware

const upload = multer({storage: multer.memoryStorage() }); // middleware to read file and this use for form data 

app.post('/create-post', upload.single("image"), async (req, res)=>{
    
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })
    
    return res.status(201).json({
        post,
        message: "Data uploaded sucessfully!",
    })
})

app.get('/posts', async(req, res)=>{

    const posts = await postModel.find();

   return  res.status(200).json({
        posts,
        message: "Data fetched succesfully!",
    })
})


module.exports = app;