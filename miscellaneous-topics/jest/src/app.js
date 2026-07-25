const express = require('express');
const validationRules = require('./middleware/validation.middleware');

const app = express();
app.use(express.json());

app.post("/register", validationRules.registerUserValidationRules, (req, res)=>{
      
    const {username, email, password} = req.body;

    res.status(201).json({
        message: "User registerd successfully",
        user : {username, email}
    })

})

module.exports = app;