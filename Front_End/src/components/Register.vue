<script>
import axios from 'axios';
import validate from '../assets/validation';
export default {
  name: "Register",
  methods: {
    async submit() {
      this.errors = []
      if (!validate.validateEmail(this.userdata.email)) {
        this.errors.push("email is not correct")
      }
      if (!validate.validateName(this.userdata.name)) {
        this.errors.push("The name can only contain alphabets")
      }
      if (!validate.validatePassword(this.userdata.password)) {
        this.errors.push('enter a strong password')
      }
      if (this.errors.length === 0) {
        await axios.post('http://localhost:3000/register', {
          'email': this.userdata.email,
          'name': this.userdata.name,
          'password': this.userdata.password,
        }
        ).then(response => {
              console.log(response);
              this.$router.push({path:'/login'});
            }).catch((error) => {
                this.errors.push('User already exists, please login')
            })
      }
    }
  },
  data() {
    return {
      userdata: {
        email: "",
        name: "",
        password: "",
      },
      errors: [],
    };
  }
}
</script>

<template>
  <div class="full">
    <div class="reg-container">
      <h1 class="heading">Register</h1>
      <div v-if="errors.length" class="error">
        <ul>
          <li v-for="error in errors" :key="error" class="error-message">{{ error }} </li>
        </ul>
      </div>
      <form @submit.prevent="submit" id="registration-form">

        <div>
          <label for="email">email :   </label>
          <input type="email" v-model="userdata.email" placeholder="Your email" required>
        </div>

        <div>
          <label for="name">name :   </label>
          <input type="text" v-model="userdata.name" placeholder="Your name" required>
        </div>

        <div>
          <label for="password">password :   </label>
          <input type="password" v-model="userdata.password" placeholder="Your password" required>
        </div>

        <button type="submit">Sign-Up</button>
      </form>
    </div>
    <div class="password-requirements">
      <p>Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one special character, and one
        number.</p>
    </div>
  </div>
</template>

<style scoped>

.reg-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

</style>