import Vue from "vue";
import Router from "vue-router";
import Home from "../Views/Home"
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/signUp",
            name: "SignUp",
            component: SignUp
        }
    ]
});
