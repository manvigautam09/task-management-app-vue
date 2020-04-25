import Vue from "vue";
import Router from "vue-router";
import Home from "../Views/Home"
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import routeConstants from "./pathConstants";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: routeConstants.HOME.path,
            name: routeConstants.HOME.name,
            component: Home
        },
        {
            path: routeConstants.LOGIN.path,
            name: routeConstants.LOGIN.name,
            component: Login
        },
        {
            path: routeConstants.SIGNUP.path,
            name: routeConstants.SIGNUP.name,
            component: SignUp
        }
    ]
});
