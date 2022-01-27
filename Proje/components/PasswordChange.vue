<template>
  <div id="login">
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="old-password">Old Password</label>
          <input
                  type="password"
                  id="old-password"
                  v-model="oldPassword">
        </div>
        <div class="input">
          <label for="new-password">Password</label>
          <input
                  :type="type"
                  id="new-password"
                  v-model="newPassword"><button style="font-size: 11px" @click="showPassword">{{ btnText }}</button>
        </div>
        <div class="input">
          <label for="new-passwordrepeat">Password</label>
          <input
                  :type="type1"
                  id="new-passwordrepeat"
                  v-model="newPasswordRepeat"><button style="font-size: 11px" @click="showPassword1">{{ btnText1 }}</button>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      <br>
      <p>
        Return to
        <router-link to="/home">Home</router-link> page.
      </p>
      <p>
        Return to
        <router-link to="/login">Login</router-link> page.
      </p>
      <p>
        Return to
        <router-link to="/signup">Sign Up</router-link> page.
      </p>
    </div>
  </div>
</template>

<script>
import axios from '../../src/axios-auth';

  export default {
    data () {
      return {
        oldPassword: '',
        newPassword: '',
        newPasswordRepeat: '',
        type: 'password',
        type1: 'password',
        btnText: 'ShowPassword',
        btnText1: 'ShowPassword',
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          newPasswordRepeat: this.newPasswordRepeat,
        }
        console.log(formData)
        axios.post('http://192.168.1.103:4003/PasswordChange', formData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
      },
      showPassword() {
       if(this.type === 'password') {
          this.type = 'text'
          this.btnText = 'Hide Password'
       } else {
          this.type = 'password'
          this.btnText = 'Show Password'
       }
     },
     showPassword1() {
       if(this.type1 === 'password') {
          this.type1 = 'text'
          this.btnText1 = 'Hide Password'
       } else {
          this.type1 = 'password'
          this.btnText1 = 'Show Password'
       }
     }
    }
  }
</script>

<style scoped>
  .login-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>