import HomePage from './components/HomePage.vue'
import TheCards from "./components/TheCards.vue"
import AppLayout from './layouts/App.vue';
import PublicLayout from './layouts/Public.vue';
import TheContacts from './components/TheContacts.vue'
import TheLogin from "./components/TheLogin.vue"
import TheSignup from "./components/TheSignup.vue"
import PasswordChange from "./components/PasswordChange.vue"
import ForgotPasswordChange from "./components/ForgotPasswordChange.vue"
import ForgotPassword from "./components/ForgotPassword.vue"
import NotFound from './components/NotFound.vue'

export default [
    {path: '/', redirect: '/home'},
    {path: '/home', component: AppLayout, children: [{path: "", component: HomePage}]},
    {path: '/projects', component: AppLayout, children: [{path: "", component: TheCards}]},
    {path: '/contacts', component: AppLayout, children: [{path: "", component: TheContacts}]},
    {path: '/login', component: PublicLayout, children: [{path: "", component: TheLogin}]},
    {path: '/signup', component: PublicLayout, children: [{path: "", component: TheSignup}]},
    {path: '/passwordchange', component: PublicLayout, children: [{path: "", component: PasswordChange}]},
    {path: '/forgotpasswordchange', component: PublicLayout, children: [{path: "", component: ForgotPasswordChange}]},
    {path: '/forgotpassword', component: PublicLayout, children: [{path: "", component: ForgotPassword}]},
    {path: '*', component: AppLayout, children: [{path: "", component: NotFound}]},
];