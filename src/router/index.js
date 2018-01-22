import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/login';
// import Table from '@/components/table';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    // {
    //   path: '/Table',
    //   name: 'Table',
    //   component: Table,
    // },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
  ],
});
