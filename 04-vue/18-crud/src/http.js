import axios from "axios"
import {Loading,Message} from "element-ui"
import router from "vue-router"

let loading;
// 开始加载动画
function startLoading(){
    loading = Loading.service({
        lock:true,
        text:"拼命加载中...",
        background:"rgba(0,0,0,0.5)"
    })
}
// 结束加载动画 
function endLoading(){
    loading.close()
}
// 请求拦截
axios.interceptors.request.use(config=>{
    startLoading()
    if(localStorage.eleToken){
        config.headers.Authorization = localStorage.eleToken
    }
    return config;
},error=>{
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response=>{
    endLoading()
    return response;
},error=>{
    endLoading()
    Message.error(error.response.data)

    const {status} = error.response
    if(status == 401){
        Message.error("token过期了... 请再登录吧...")
        localStorage.removeItem("eleToken")
        router.push("/login")
    }

    return Promise.reject(error)
})

export default axios;












