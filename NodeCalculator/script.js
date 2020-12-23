var args = process.argv.slice(2)

var calc = require("./calc");

var a = Number(args[1]);
var b = Number(args[2]);
var c = "";




if(args[0] == "a"){
    c = calc.add(a, b);
}else if(args[0] == "m"){
    c = calc.mult(a, b);
}else{
    console.log("opção inválida, tente de novo :P");
}

console.log(c)