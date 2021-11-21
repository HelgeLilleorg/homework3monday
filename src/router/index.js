import Vue from "vue";
import VueRouter from "vue-router";
import Contactus from "../views/Contactus.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/contactus",
        name: "Contact Us",
        component: Contactus,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
    },
    {
        path: "/",
        name: "MainPage",
        component: Products,
    },

];

const router = new VueRouter({
    linkActiveClass: "active",
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;