<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Users </button>
         </small>
        </h4>

        <div class="col-md-12 form-wrapper">
          <h2> Edit User </h2>
          <form id="create-post-form" @submit.prevent="editUser">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="user.first_name" name="title" class="form-control" placeholder="Enter firstname">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="user.last_name" name="title" class="form-control" placeholder="Enter Last name">
               </div>

             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="user.email" name="title" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Phone </label>
                <input type="text" id="phone_number" v-model="user.phone" name="title" class="form-control" placeholder="Enter Phone number">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Address </label>
                <input type="text" id="address" v-model="user.address" name="title" class="form-control" placeholder="Enter Address">
            </div>

              <div class="form-group col-md-12">
                  <label for="description"> Description </label>
                  <input type="text" id="description" v-model="user.description" name="description" class="form-control" placeholder="Enter Description">
              </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit User </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      user: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser();
  },
  methods: {
    editUser() {
      let userData = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address,
        description: this.user.description
      };

      axios
        .put(
          `${server.baseURL}/users/update?id=${this.id}`,
          userData
        )
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getUser() {
      axios
        .get(`${server.baseURL}/users/${this.id}`)
        .then(data => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

