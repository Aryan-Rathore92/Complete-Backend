const express = require('express');
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json()); // This is middleware use for get data from body


app.post("/notes", async (req, res)=>{ // post-api
   const data =  req.body;

    await noteModel.create({
        title: data.title,
        description: data.description,
   })

   res.status(201).json({
      message: "Note created sucessfully!"
   })
})

app.get("/notes", async (req, res)=>{
      const notes = await noteModel.find(); // It always return an array

    //   const notes = await noteModel.findOne({ // findOne always return an object
    //         title: "KeyBoard_6",
    //   });

   res.status(200).json({
       notes: notes,
       message: "Notes fatched sucessfully!"
   })

})

app.delete("/notes/:id", async (req, res)=>{
    const id = req.params.id;
    
    await noteModel.findOneAndDelete({
        _id: id,
    })

    res.status(200).json({
        message: "Note deleted Sucessfully!"
    })
})

app.patch("/notes/:id", async(req, res)=>{
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({ _id: id },{ description: description});

    res.status(200).json({
        message: "Note Updated sucessfully!"
    })
})

module.exports = app;