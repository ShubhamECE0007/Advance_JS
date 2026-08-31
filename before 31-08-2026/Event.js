// import fs from "fs";
// setTimeout(()=>{
//     console.log("setTimeout");
// },0);

// fs.readFile("INTRO.txt","utf8",(err,data)=>{
//     console.log("File read Completed");
// });


// setInterval(()=>{
//     console.log("setInterval after 5ms");
// },500);

// setImmediate(()=>{
//     console.log("Set Immediate");
// });

import fs from "fs";
fs.readFile("INTRO.txt","utf8",(err,data)=>{
    console.log("File read Completed");
    setTimeout(()=>{
        console.log("setTimeout");
    },0);
    setImmediate(()=>{
        console.log("Set Immediate");
    })
})
