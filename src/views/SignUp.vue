<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Account </h2>
          <form v-if="!confirmPassword" id="create-post-form" @submit.prevent="signUp">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="first_name" name="firstname" class="form-control" placeholder="Enter First name">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="last_name" name="lastname" class="form-control" placeholder="Enter Last name">
               </div>

             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="email" name="email" class="form-control" placeholder="Enter email">
            </div>
 
            <div class="form-group col-md-12">
                <label for="title"> Password </label>
                <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
            </div>

             <div class="form-group col-md-12">
                <label for="title"> Confirm Password </label>
                <input type="password" id="confirmpassword" v-model="confirmpassword" name="confirmpassword" class="form-control" placeholder="Confirm password">
            </div>


              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Account </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
// import { server } from "../../helper";
// import router from "../../router";
// export default {
//   data() {
//     return {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       confirmpassword: ""

//     };
//   },
//   methods: {
//     createAccount() {
//       let userData = {
//         first_name: this.first_name,
//         last_name: this.last_name,
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
//   }
// };
</script>