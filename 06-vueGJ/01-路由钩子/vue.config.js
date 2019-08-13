let path = require("path")
// 大部分在这里配置webpack的相关的代码
// webpack是基于node  不能使用import  process
module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "http://www.abcde.com" : "/",
    assetsDir:"asserts",
    runtimeCompiler:false,
    productionSourceMap:false,
    chainWebpack:config=>{
        // 可以获取到webpack的配置 在增加一些自己的逻辑
        // 配置目录别名 别名叫+
        config.resolve.alias.set('_c',path.resolve(__dirname,'src/components'));
        config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'));
    },
    configureWebpack:{ // webpack-merge
        plugins:[],
        module:{}
    },
    devServer:{ // 本地开发服务器  上线不需要
        proxy:{
            "/api/getUser":{
                target:"http://localhost:3000",
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
