// 在node端，只能写js，不能写html,css，新建文件都是js文件
let fs = require("fs")  // filesystem
fs.readFile("./out.txt","utf-8",function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data)
})
