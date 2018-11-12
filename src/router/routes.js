import Home from "../containers/Home/Home";
import Login from "../containers/Auth/Login/Login";
import Register from "../containers/Auth/Register/Register";

const routes = [{
    path: '/',
    component: Home,
    title: 'Домашняя',
}, {
    path: '/login',
    component: Login,
    title: 'Вход',
}, {
    path: '/register',
    component: Register,
    title: 'Регистрация',
}, ];

export default routes;