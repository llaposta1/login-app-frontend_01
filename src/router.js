import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/views/Home";
import ProfileComponent from "@/components/user/Profile";
import SignUp from "@/views/SignUp";
import LoginComponent from "@/components/user/Login";
import ResetPasswordComponent from "@/components/user/ResetPassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: HomeComponent },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileComponent,
      meta: { requiresAuth: true },
    },
    { path: "/login", name: "Log in", component: LoginComponent },
    {
      path: "/resetpassword",
      name: "Reset Password",
      component: ResetPasswordComponent,
    },
  ],
});
