<template lang="">
    <div>
        <ul class="d-flex justify-content-end">
            <li v-if="!user">
                <router-link to="/">
                <a>Log In</a></router-link>
            </li>
            <li v-if="!user">
                <router-link to="/signup">
                <a>Sign Up</a></router-link>
            </li>
            <li v-if="user">
                <div class="font-weight-bold">{{ user.username }}</div>
            </li>
            <li v-if="user">
                <router-link to="/profile">
                <a>Profile</a></router-link>
            </li>
            <li v-if="user">
                <div class="font-weight-bold" @click="logout">Log out</div>
            </li>
        </ul>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';
export default {
    methods: {
        async logout(){
            await this.$$store.dispatch("auth/logout");
            this.$router.push("/")
        }
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    }
}
</script>
<style lang="">
    
</style>