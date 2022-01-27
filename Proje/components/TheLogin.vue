<template>
  <div id="login">
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Email</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  :type="type"
                  id="password"
                  v-model="password"><button style="font-size: 11px" @click="showPassword">{{ btnText }}</button>
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
        Don't you have an account? Go to
        <router-link to="/signup">Sign Up</router-link> page.
      </p>
      <p>
        Would you like to 
        <router-link to="/passwordchange">change your password</router-link> ?
      </p>
      <p>
        Forgot your 
        <router-link to="/forgotpassword">password</router-link> ? Send a code to your email and change your password from the section down below.
      </p>
      <p>
        Here you can  
        <router-link to="/forgotpasswordchange">change your password</router-link> via the code that has been sent to your email.
      </p>
    </div>
  </div>
</template>

<script>
import axios from '../../src/axios-auth';

  export default {
    data () {
      return {
        email: '',
        password: '',
        type: 'password',
        btnText: 'ShowPassword',
      }
    },
    methods: {
      onSubmit () {
        this.formData = false
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        axios.post('/Account/AdminLogin', formData)
          .then(res => {console.log(res); this.formData = true;})
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