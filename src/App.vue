<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> | 
      <router-link to="/createaccount">Create Account</router-link> | 
      <router-link to="/signin">Sign in</router-link> | 
      <router-link to="/resetpassword">Reset Password</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4e4e4e;
}

#nav a.router-link-exact-active {
  color: #2b2b2b;
}


</style>

