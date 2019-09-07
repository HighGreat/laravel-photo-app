import Vue from 'vue';
import VueRouter from 'vue-router';

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue';
import Login from './pages/Login.vue';

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PhotoList
        },
        {
            path: '/login',
            component: Login
        }
    ]
});