<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <!-- 手机号 -->
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup type="number" v-model="verifyCode" placeholder="验证码" :error="errors.code" />

    <!-- 用户服务协议 -->
    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button :disabled="idClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
import { setInterval, clearInterval } from 'timers';

export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      btnTitle: "获取验证码",
      disabled: false,
      errors: {}
    };
  },
  computed:{
    idClick(){
      if(!this.phone || !this.verifyCode){
        return true;
      }else{
        return false
      }
    }
  },
  methods: {
    // 验证手机号
    validatePhone() {
      // 验证一把手机号
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    // 倒计时
    validateBtn(){
      let time = 60;
      let timer = setInterval(()=>{
        if(time == 0){
          clearInterval(timer)
          this.btnTitle = "获取验证码"
          this.disabled = false;
        }else{
          this.btnTitle = time+"秒后重试"
          this.disabled = true;
          time--;
        }
      },1000)
    },
    // 获取验证码
    getVerifyCode() {
      if(this.validatePhone()){
        this.validateBtn();
        // console.log("发出请求")
        this.$axios.post("/api/posts/sms_send",{
          tpl_id:"176776",
          key:"df41d94cebf6f35570c6aeab71a6249d",
          phone:this.phone
        }).then(res=>{
          console.log(res)
        })
      }
    },
    // 登录
    handleLogin(){
      this.errors = {}   //取消错误提醒
      // alert("hello")
      // 发出请求  确定你的验证码是否OK
      this.$axios.post("/api/posts/sms_back",{
        phone:this.phone,
        code:this.verifyCode
      }).then(res=>{
        // 表示OK
        // console.log(res)
        localStorage.setItem("ele_login",true)
        this.$router.push("/")
      }).catch(err=>{
        // 表示不OK
        console.log(err)
        this.errors = {
        }
      })
    }
  },
  components: {
    InputGroup
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>