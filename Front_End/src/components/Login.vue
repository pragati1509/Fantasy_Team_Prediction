<script>
import axios from 'axios';
import validate from '../assets/validation';
export default {
    methods : {
    async submit(){
        this.errors = [];
        if(!validate.validateEmail(this.userdata.email)){
            this.errors.push('enter a valid email')
        }
        if(!validate.validatePassword(this.userdata.password)){
            this.errors.push('password does not match')
        }
        if(this.errors.length===0){
            await axios.post('http://localhost:3000/login',{
                'email' : this.userdata.email,
                'password' : this.userdata.password
            }).then(response => {
                if(response.data.isAdmin){
                    this.$router.push({path:'/admindashboard'})
                    this.$store.dispatch('admin')
                }else{
                    this.$router.push({path:'/userdashboard'})
                } 
                this.$store.dispatch('login')
            }).catch((error) => {
                console.log(error);
                this.errors.push('Invalid credentials, try again')
            })
        }
    }
  },
  data() {
     return {
        userdata : {
            email : "",
            password : "",
        },
        errors : []
     }
  },
}
  
</script>

<template>
    <div>
        <h1 class="heading">Login</h1>
    </div>
    <div>
        <div v-if="errors.length" class="error">
           <ul >
              <li v-for="error in errors" :key="error" class="error-message">{{ error }} </li>
           </ul>
        </div>
        <form @submit.prevent="submit">
            <div>
                <label for="email">email :</label>
                <input type="email" v-model="userdata.email" placeholder="your email" required>
            </div>
            <div>
                <label for="password">password :</label>
                <input type="password" v-model="userdata.password" placeholder="your password" required>
            </div>
            <div>
                <button type="submit">Sign-in</button>
            </div>
            <div>

            </div>
        </form>
    </div>
</template>