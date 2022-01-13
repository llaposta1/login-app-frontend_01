
<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Account </h2>
          <form v-if="!confirmPassword" id="create-post-form" @submit.prevent="signUp">
               <!-- <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="first_name" name="firstname" class="form-control" placeholder="Enter First name">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="last_name" name="lastname" class="form-control" placeholder="Enter Last name">
               </div> -->

               <div class="form-group col-md-12">
                <label for="userName"> Username </label>
                <input type="text" id="userName" v-model="username" name="userName" class="form-control" placeholder="Enter username">
            </div>

             <div class="form-group col-md-12">
                <label for="email"> Email </label>
                <input type="text" id="email" v-model="email" name="email" class="form-control" placeholder="Enter email">
            </div>
 
            <div class="form-group col-md-12">
                <label for="password"> Password </label>
                <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
            </div>

            <!-- <div class="form-group col-md-12">
                <label for="confirmPassword"> Confirm Password </label>
                <input type="password" id="confirmpassword" v-model="confirmpassword" name="confirmpassword" class="form-control" placeholder="Confirm password">
            </div> -->

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Account </button>
              </div>          
          </form>
        <div v-if="error" class="text-danger">{{error.message}} </div>
        <div v-if="confirmPassword" class="form-group col-md-4 pull-right">
            <h3>Enter your code. Please check your email</h3>
            <div class="form-group col-md-4 pull-right">
                <!-- <label class="block text-gray-700 text-sm font-bold" for="code">Code</label> -->
                <label class="block text-gray-700 text-sm font-bold" for="code">Code</label>
                <input type="text" name="code" id="code"
                />
                <button class="btn btn-success" @click="confirmSignUp"> Confirm code </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
// import { server } from "../../helper";
// import router from "../../router";
export default {
  data: () => ({
    //   first_name: "",
    //   last_name: "",
    username: "",
      email: "",
      password: "",
      confirmPassword: false,
      error: "",
      code: ""

    }),
  methods: {
      async signUp(){
          if(!this.email || !this.password){
              return;
          }
          try{
              await this.$store.dispatch("auth/signUp", {
                  username: this.username,
                  password: this.password,
                  email: this.email
              });

              this.confirmPassword = true;

          }catch(error){
              this.error = error;

          }
      },
      async confirmSignUp(){
          if(!this.username || !this.code){
              return;
          }
          try{
              const { username, password, code} = this;
              await this.$store.dispatch("auth/confirmSignUp", {
                  username,
                  code
              });
              await this.$store.dispatch("authlogin", {
                  username,
                  password
              })
              this.$router.push("/profile")

          } catch (error) {
              console.log("error");
          }
      }
//     createAccount() {
//       let userData = {
//         // first_name: this.first_name,
//         // last_name: this.last_name,
//         email: this.email,
//         password: this.password,
//         confirmpassword: this.confirmpassword

//       };
//       this.__submitToServer(userData);
//     },
//     __submitToServer(data) {
//       axios.post(`${server.baseURL}users`, data).then(data => {
//         router.push({ name: "home" });
//       });
//     }
  }
};
</script>