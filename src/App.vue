<template>
  <div id="login-container">
        <h2>Log in</h2>
        <span>to start learning</span>
      <form action="">
        <div class="form-group">
          <label for="twitter">Twitter handle</label>
          <input  v-model="twitter" type="email" name="twitter" id="twitter" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="password" id="password" required>
        </div>
        <a href="">Forgot password?</a>
        <button class="btn" @click="change">
        <p >Log in</p> 
        <Icon class="i" icon="basil:arrow-right-outline"></Icon></button>
      </form>
      <!-- <p class="submit" v-show="showSuccess">{{ successMessenger }}</p> -->
  </div>

  <div class="invalid-wrapper" v-if="isShowPopupInvalid">
    <div class="popup-main">
        <Icon class="i" icon="ic:outline-cancel"></Icon>
        <h2>Invalid email!</h2>
        <p>This email is already registered please login. </p>
        <button @click="closePopupInvalid" class="btn">OK</button>
    </div>
</div>
<div class="successfully-container" v-if="isShowSuccessfully">
    <div class="popup-success">
        <Icon class="i" icon="ic:round-check-circle-outline"></Icon>
        <h2>Oh Yeah!</h2>
        <p>You have successfully registered and logged in. </p>
        <button   class="btn">OK</button>
    </div>
</div>

   <!-- <PopupInvalid v-show="isShowPopupInvalid"/>
  <PopupSuccessfully v-show="isShowSuccessfully"/> -->
</template>
<script setup>
import {ref} from "vue"

const twitter = ref('');
const password = ref('');
const isShowPopupInvalid = ref(false);
const isShowSuccessfully = ref(false);


function change() {
if (twitter.value === "a@example.com" && password.value === "123456") {
    isShowSuccessfully.value = true;
    isShowPopupInvalid.value = false;
} else {
    isShowPopupInvalid.value = true;
    isShowSuccessfully.value = false;
}
twitter.value = '';
password.value = '';
}
function closePopupInvalid() {
isShowPopupInvalid.value = false;
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body {
font-family: "Roboto", sans-serif;
font-weight: 400;
font-style: italic;
background-color: #f0f0f0;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

} 
#login-container{
width: 20rem;
height: 27rem;
border: .1rem solid rgba(0, 0, 0, .1);
border-radius: 2rem;
margin: 9rem auto;
}
h2{
font-size: 2rem;
margin-left: 1rem;
}
span{
font-size: 1.2rem;
margin-left: 1rem;
color: #343434;
}
form{
padding-top: 1rem;
margin: 0 1rem;
width: 20rem;
}
form .form-group{
margin-bottom: 15px;
}
form .form-group label{
display: block;
padding-bottom: .5rem;
color: #BEBEBE;
}
form .form-group input{
width: 17.3rem;
height: 1.5rem;
}
a{
color: #BEBEBE;
text-decoration: none;
display: block;
padding-bottom: 1.5rem;
}
.btn{
/* padding:0 6.3rem; */
height: 3rem;
width: 17.7rem;
background: #0C6CDA;
border: none;
font-size: 1rem;
border-radius: .3rem;
color: #E4EFFB;
display: flex;
/* text-align: center; */
justify-content: center;

}
.btn p{
font-size: 1.2rem;
margin:.8rem 0;
/* padding-bottom: 4rem; */
}
.btn .i{
padding-top: .5rem;
font-size: 2rem;
color: #E4EFFB;
}
.submit{
font-size: 1.2rem;
color: #E23C3C;
text-align: center;
}


/* ---- invalid*/
.invalid-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: #7f7f7f;
}
.popup-main{
    width: 350px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
}
.popup-main .i{
    font-size: 80px;
    color: red;
    margin: 5px 140px;
}
.popup-main h2{
    font-size: 25px;
    color: red;
    margin-left: 100px;
}
.popup-main p{
    font-size: 20px;
    color: #75787a;
    text-align: center;
}
.popup-main .btn{
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background: red;
    border: none;
    color: #fff;
    padding-top: 15px;
    margin: 10px 140px;
}
/* 
----successfully */
.successfully-container{
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: #7f7f7f;
}
.popup-success{
    width: 350px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
}
.popup-success .i{
    font-size: 80px;
    color: #198754;
    margin: 5px 140px;
}
.popup-success h2{
    font-size: 25px;
    color: #198754;
    margin-left: 135px;
}
.popup-success p{
    font-size: 20px;
    color: #75787a;
    text-align: center;
}
.popup-success .btn{
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background: #198754;
    border: none;
    color: #fff;
    margin: 10px 140px;
    padding-top: 15px;
}


</style>