const fs = require("fs")

// 利用回调函数
// fs.readFile("out.txt","utf8",(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

// 使用promise写法
// let p = new Promise((resolve, reject) => {
//     fs.readFile("out1.txt", "utf8", (err, data) => {
//         if (err) {
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })
// p.then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

function readFile(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,"utf8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// readFile("out.txt").then(res=>console.log(res),err=>console.log(err))
readFile("out1.txt").then(res=>console.log(res)).catch(err=>console.log(err))
