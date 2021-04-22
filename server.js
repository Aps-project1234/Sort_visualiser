const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("public"));

app.use("/" , (req,res,next) =>{
    res.status(200).sendFile(path.join(__dirname, "index.html"));
})


app.listen(process.env.PORT|| 3000 ,()=>{
    console.log("server running");
})