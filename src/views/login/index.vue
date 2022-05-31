
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { toLogin } from '@/api/modules/login'
import { accessTokenStored, userInfoStored } from '@/utils/storage'

const router = useRouter()
const isFocus = ref(false)

const userName = ref('')
const userPassword = ref('')

onMounted(async () => {
  accessTokenStored.destroy()
  userInfoStored.destroy()
})

async function handleLogin () {
  const userInfo: UserInfo = await toLogin({ username: userName.value, password: userPassword.value })
  accessTokenStored.value = userInfo.accessToken
  userInfoStored.value = userInfo
  if (accessTokenStored.value && userInfo.name) {
    router.push('/farms')
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="form-box">
      <div class="owl" :class="isFocus ? 'password' : ''">
        <div class="hand"></div>
        <div class="hand hand-r"></div>
        <div class="arms">
            <div class="arm"></div>
            <div class="arm arm-r"></div>
        </div>
      </div>
      <div class="input-box">
        <input
          v-model="userName"
          type="text"
          placeholder="Name"
        >
        <input
          v-model="userPassword"
          type="password"
          placeholder="Password"
          @focus="isFocus = true"
          @blur="isFocus = false"
        >
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(200deg,#72afd3,#96fbc4);
}

.form-box {
    position: relative;
    width: 320px;
}
.input-box{
    display: flex;
    flex-direction: column;
}
.input-box input{
    height: 40px;
    border-radius: 3px;
    text-indent: 15px;
    outline: none;
    border: none;
    margin-bottom: 15px;
}
.input-box input:focus{
    outline: 1px solid lightseagreen;
}
.input-box button{
    border: none;
    height: 45px;
    background-color: lightseagreen;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
}
.owl{
    width: 211px;
    height: 108px;
    background: url("@/assets/png/owl-login.png") no-repeat;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
}
.owl .hand{
    width: 34px;
    height: 34px;
    border-radius: 40px;
    background-color: #472d20;
    position: absolute;
    left: 12px;
    bottom: -8px;
    transform: scaleY(0.6);
    transition: 0.3s ease-out;
}
.owl .hand.hand-r{
    left: 170px;
}
.owl.password .hand{
    transform: translateX(42px) translateY(-15px) scale(0.7);
}
.owl.password .hand.hand-r{
    transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.owl .arms{
    position: absolute;
    top: 58px;
    width: 100%;
    height: 41px;
    overflow: hidden;
}
.owl .arms .arm{
    width: 40px;
    height: 65px;
    position: absolute;
    left: 20px;
    top: 40px;
    background: url("@/assets/png/owl-login-arm.png") no-repeat;
    transform: rotate(-20deg);
    transition: 0.3s ease-out;
}
.owl .arms .arm.arm-r{
    transform: rotate(20deg) scaleX(-1);
    left: 158px;
}
.owl.password .arms .arm{
    transform: translateY(-40px) translateX(40px);
}
.owl.password .arms .arm.arm-r{
    transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
</style>
