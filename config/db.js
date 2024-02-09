
const express = require('express');
const mongoose = require('mongoose');

// const app = express();



const dbs=(()=>{

    mongoose.connect("mongodb://localhost:27017")

    

    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(err => {
      console.error("Error connecting to MongoDB:", err);
    });
  
})

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

module.exports = dbs;