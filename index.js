var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();
var etl = require('./dbOperations')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

let port = process.env.PORT || 3000 ;

app.listen(port);
console.log("API is runnning at " + port);

router.use((req,res,next)=>{
    console.log("use section");
    next()
})

router.get("/getDetails", async function(req,res,next){
    try {
        res.json(await etl.getDetails())
        
    } catch (error) {
        console.log(error);
    }
})