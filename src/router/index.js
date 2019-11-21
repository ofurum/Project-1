import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import services from '../views/services.vue'
import Simplify from '../views/Simplify.vue'
import Features from '../views/Features.vue'
import Forms   from '../views/Forms.vue' 


Vue.use(VueRouter);

const routes = [
    {
      path:'/Form',
      name: 'home',
      component: Form,
    },
    {
      path:'/services',
      name: 'service',
      component: services
    },
    {
        path:'/Simplify',
        name:' simplify',
        component: Simplify
    },
    {
        path:'/Features',
        name:'feature',
        component: Features
    },
    {
      path:'/Forms',
      name:'forms',
      component: Forms
  }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;