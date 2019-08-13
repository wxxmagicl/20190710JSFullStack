// express 是用来写接口的  localhost:3000/getUser
let express = require("express")
// 创建应用
let app = express()

app.get("/getUser",(req,res)=>{
    res.json({name:"hello"})
})

// 监听端口
app.listen(3000)