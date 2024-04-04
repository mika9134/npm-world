const figlet = require("figlet");
const colour = require("colour");

 figlet( 'Hello all!' , function (err, data){
    if (err){
        console.log("eror")
        console.dir(err);
        return;
    }
    console.log(data.yellow)
 });