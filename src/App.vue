<template>
  <div id="app" class="contents">
    <div id="nav">
      <Nav />    
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/user/Nav.vue';
import { mapActions } from "vuex";
export default {
  mounted(){
    this.authAction();
  },
  components: {
    Nav,
  },
  methods: {
    ...mapActions("auth", ["authAction"]),
  },
};
</script>
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

