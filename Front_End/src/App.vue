<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState } from 'vuex'
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$store.dispatch('user')
      this.$router.push('/');
    },
  }
}
</script>

<template>
  <div class="wrapper">
    <nav class="navigate nav-style navbar-expand-lg">
      <div class="logo">
        <img src="/logo.png" alt="logo">
      </div>
        <ul class="nav-links">
          <li class="navbar-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="navbar-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="navbar-item" v-if="!isAuthenticated"><router-link class="nav-link"
              to="/register">Register</router-link></li>
          <li class="navbar-item" v-if="isAuthenticated && isAdmin">
            <router-link class="nav-link" to="/admindashboard">Dashboard</router-link>
          </li>
          <li class="navbar-item" v-if="isAuthenticated && !isAdmin">
            <router-link class="nav-link" to="/userdashboard">Dashboard</router-link>
          </li>
          <li class="navbar-item" v-if="isAuthenticated"><a @click="logout" class="nav-link">Logout</a></li>
        </ul>
    </nav>


  <RouterView />
  <div class="foot" id="footer">
    <div class="container-fluid">
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fas fa-envelope"></i>
      <p>© Copyright 2023 crew11</p>
    </div>
  </div>
</div>
</template>

<style>
.nav-style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #a3acb0;
}

.logo img {
  margin-left: 10%;
  height: 60px;
}

.nav-links {
  display: flex;
  flex-direction: row;
  position: absolute;
  list-style: none;
  right: 20px;
}

.navbar-item { 
  color: #7B113A;
  font-size: 22px;
  margin-left: 20px;
}

.navigate{
  position: relative;
}

.foot {
  text-align: center;
  padding: 7% 15%;
}

.social-icon {
  margin: 20px 10px;
}
</style>
