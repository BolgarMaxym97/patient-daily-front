import Home from "../containers/Home/Home";
import Login from "../containers/Auth/Login/Login";
import Register from "../containers/Auth/Register/Register";
import Logout from "../components/Logout";
import Patient from '../components/Home/Patient/Patient'
import PatientInfo from '../components/Home/PatientInfo/PatientInfo'

const routes = [
    {
        path: '/',
        component: Home,
        title: 'Домашняя',
        exact: true,
        authed: true,
    },
    {
        path: '/login',
        component: Login,
        title: 'Вход',
        exact: false,
        authed: false,
    },
    {
        path: '/register',
        component: Register,
        title: 'Регистрация',
        exact: false,
        authed: false,
    },
    {
        path: '/hospital/patient/:id',
        component: Patient,
        title: 'Страница пациента',
        exact: true,
        authed: true,
    },
    {
        path: '/hospital/patient/create-info/:id',
        component: PatientInfo,
        title: 'Создание записи',
        exact: true,
        authed: true,
    },
    {
        path: '/logout',
        component: Logout,
        title: 'Выход',
        exact: false,
        authed: true
    },
];

export default routes;