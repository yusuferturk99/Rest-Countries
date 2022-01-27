<template>
  <div id="signup">
    <div class="signup-form">
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
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <div style="">
          <input
                  :type="type1"
                  id="confirm-password"
                  v-model="confirmPassword"
                  style="display: inline-block"><button style="font-size: 11px; display: inline-block" @click="showPassword1">{{ btnText1 }}</button></div>
        </div>
        <div class="input">
          <label for="first-name">FirstName</label>
          <input
                  type="name"
                  id="first-name"
                  v-model="firstName">
        </div>
        <div class="input">
          <label for="last-name">LastName</label>
          <input
                  type="name"
                  id="last-name"
                  v-model="lastName">
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
        Do you have an account? Go to
        <router-link to="/login">Login</router-link> page.
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
        confirmPassword: '',
        firstName: '',
        lastName: '',
        type: 'password',
        type1: 'password',
        btnText: 'ShowPassword',
        btnText1: 'ShowPassword',
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          firstname: this.firstName,
          lastname: this.lastName,
        }
        console.log(formData)
        axios.post('/Account/Create', formData)
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
    },

  }
</script>

<style scoped>
  .signup-form {
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

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
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