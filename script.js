var args = process.argv.slice(2)

var a = Number(args[1]);
var b = Number(args[2]);
var c = "";

function add(x, y){
    return x + y;
}

function mult(x, y){
    return x * y;
}

if(args[0] == "a"){
    c = add(a, b);
}else if(args[0] == "m"){
    c = mult(a, b);
}

console.log(c)