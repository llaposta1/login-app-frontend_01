<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Sign in</h2>
          <form id="create-post-form" @submit.prevent="loginUser">

             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Password </label>
                <input type="password" id="password" v-model="password" name="title" class="form-control" placeholder="Enter password">
            </div>

              <div class="form-group col-md-2 pull-right">
                  <button class="btn btn-success" type="submit"> Sign in </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      let signinData= {
        email: this.email,
        password: this.password
      };
      this.__submitToServer(signinData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/users`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>