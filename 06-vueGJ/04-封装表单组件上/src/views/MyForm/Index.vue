<template>
    <div>
        <h2>这是我们封装的form表单组件</h2>
        <hr>
        <k-form ref="loginForm" :rules="rules">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username" placeholder="输入用户名"></k-input>
            </k-form-item>
            <k-form-item label="确认密码" prop="password">
                <k-input type="password" v-model="model.password" placeholder="输入用户名"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="submitForm('loginForm')">提交</button>
            </k-form-item>
        </k-form>
    </div>
</template>


<script>
import KForm from "./Form"
import KFormItem from "./FormItem"
import KInput from "./Input"
import Notice from "./KNotice"
export default {
    data(){
        return{
            model:{
                username:"wangcai",
                password:""
            },
            rules:{
                username:[{required:true,message:"请输入用户名"}],
                password:[{required:true,message:"请输入密码"}],
            }
        }
    },
    methods:{
        submitForm(form){
            this.$refs[form].validate(valid=>{
                const notice = this.$create(Notice,{
                    title:"hello world",
                    message:valid ? "请求登录" : "校验失败",
                    duration:1000
                })
                notice.show()
            })
        }
    },
    components:{
        KForm,KFormItem,KInput
    }

}
</script>