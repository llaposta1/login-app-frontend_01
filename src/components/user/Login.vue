<template>
   <div>
     <div class="col-md-12 form-wrapper">
       <h2> Log In</h2>
          <form id="create-post-form" @submit.prevent="login">
             <div class="form-group col-md-12">
                <label for="userName"> User Name </label>
                <input type="text" id="userName" v-model="username" name="username" class="form-control" placeholder="Enter user name">
            </div>
            <div class="form-group col-md-12">
                <label for="password"> Password </label>
                <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
            </div>
              <div class="form-group col-md-2 pull-right">
                  <button class="btn btn-success" type="submit"> Log in </button>
              </div>          
          </form>
          <div class="text-danger">{{error.message}}</div>
        </div>
   </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    username: "",
    password: "",
    // email: "",
    error: "",
  }),
  methods: {
    ...mapActions({
      loginVue: "auth/login",
    }),
    async login() {
      try {
        await this.loginVue({
          username: this.username,
          password: this.password,
        });
        this.$router.push("/profile");
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>