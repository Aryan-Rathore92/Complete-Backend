const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const router = express.Router();

router.post("/create", async (req, res)=>{
      
      const token = req.cookies.token; // This give token present in cookies

      if(!token){ // This check token present is or not
            return res.status(401).json({
                  message: "Unauthorized"
            })
      }

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // This does verify token
            console.log(decoded); // { id: '6a5fa1eddee9ce08139faf87', iat: 1784652269 }[Here id is userId and iat token create time]

            const user = await userModel.findOne({
                  _id: decoded.id
            })
            console.log(user);
            
            
      } catch (error) {
            return res.status(401).json({
                  message: "Token is Invalid"
            })
      }

      res.send("Post created successfully!")
      
})

module.exports = router;