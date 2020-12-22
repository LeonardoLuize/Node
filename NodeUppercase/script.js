let fs = require("fs");

/* fs.writeFile('teste.txt', "Hello World :)", (error) =>{
    if(error){
        throw error;
    }else{
        console.log("Arquivo cirado com sucesso!")
    }
}) */

let args = process.argv.slice(2);

var fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) =>{
    if (error ) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => {
        if (error) throw error;

        console.log("Arquivo gerado com sucesso!!!");
    })
})