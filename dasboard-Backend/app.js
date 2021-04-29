const express = require("express");
var request = require("request");
const app = express();
const port = 5000;

//app.get("/",(req,res) => res.send("Hello Node!"));

app.get("/blog",(req,res) => {
    request(
        "https://www.fossnsbm.org",
        function(error, response, body){
            if(!error && response.statusCode == 200){
                res.send("Active");
            }else{
                res.send("Inactive");
            }
        }
    );
});

app.get("/forum",(req,res) => {
    request(
        "https://forum.fossnsbm.org/",
        function(error, response, body){
            if(!error && response.statusCode == 200){
                res.send("Active");
            }else{
                res.send("Inactive");
            }
        }
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

