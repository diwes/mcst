let exec = require('child_process').exec, child;
let fs = require("fs");
if (process.argv[2] != null) {
    if (process.argv[2].toLowerCase() === "v") {
        console.log("1.0");
    } else {
        console.log("npm run version << for check version toolkit.js");
    }
    if (process.argv[2].toLowerCase() === "eula:true")
    {
        fs.writeFile("./builds/"+process.argv[3]+"/eula.txt", "eula=true", (err) => {
            console.log("eula created")
        });
    }
} else {
    console.log("Command does not exists");
}