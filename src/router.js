import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/views/Home";
import ProfileComponent from "@/components/user/Profile";
import CreateComponent from "@/components/user/CreateAccount";
import SigninComponent from "@/components/user/Signin";
import ResetPasswordComponent from "@/components/user/ResetPassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: HomeComponent },
    {
      path: "/createaccount",
      name: "CreateAccount",
      component: CreateComponent,
    },
    { path: "/profile", name: "Profile", component: ProfileComponent },
    { path: "/signin", name: "Sign in", component: SigninComponent },
    {
      path: "/resetpassword",
      name: "Reset Password",
      component: ResetPasswordComponent,
    },
  ],
});
