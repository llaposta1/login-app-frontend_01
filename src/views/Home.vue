<template>
    <div>
<div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{user.username}}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
      
 
    </div>
</template>

<script>
// import { server } from "../helper";
// import axios from "axios";

// export default {
//   data() {
//     return {
//       users: []
//     };
//   },
//   created() {
//     this.fetchUsers();
//   },
//   methods: {
//     fetchUsers() {
//       axios
//         .get(`${server.baseURL}/users`)
//         .then(data => (this.users = data.data));
//     },
//     deleteUser(id) {
//       axios
//         .delete(`${server.baseURL}/users/delete?id=${id}`)
//         .then(data => {
//           console.log(data);
//           window.location.reload();
//         });
//     }
//   }
// }
</script>

