const express = require('express');

const app = express();
app.use(express.json());// This is an middleware

const notes =[];


app.post('/notes', (req, res)=>{
    notes.push(req.body);

    res.status(201).json({
        message: "Note created succesfully",
    })
})

app.get('/notes', (req, res)=>{
    res.status(200).json({
        notes: notes,
        Message: "Notes created succesfully",
    })
})

app.delete('/notes/:index', (req, res)=>{
    const index = req.params.index;

    delete notes[index];

    res.status(200).json({
        message: "Note deleted succesfully"
    })
})

app.patch('/notes/:index', (req, res)=>{
        const index = req.params.index

        const title = req.body.title;
        notes[index].title = title;

        res.status(200).json({
            message: "Note Update sucessfully!"
        })
})

module.exports = app;
