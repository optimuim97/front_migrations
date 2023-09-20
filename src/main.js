import { createApp } from 'vue'
// import Vue, { createApp } from '@vue/compat';

import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Routes from "./utils/routes.js";
import User from "./utils/User";
import AppStorage from "./utils/AppStorage";
import Token from './utils/Token';
import axios from 'axios';
import VueSweetalert2 from "vue-sweetalert2";
import BootstrapVue from 'bootstrap-vue-3'

import "sweetalert2/dist/sweetalert2.min.css";
// import './styles/css/style.css'
// import './styles/modules/bootstrap/css/bootstrap.min.css'
// import './styles/modules/fontawesome/css/all.min.css'
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';
import './assets_dash/vendors/feather-icons/feather.css'
import './assets_dash/vendors/@fortawesome/fontawesome-free/css/all.min.css'
import './assets_dash/vendors/themify-icons/themify-icons.css'
import './assets_dash/vendors/perfect-scrollbar/css/perfect-scrollbar.css'
import './assets_dash/vendors/line-awesome/css/line-awesome.min.css'
import './assets_dash/css/app.min.css'

loadFonts()

window.User = User;
window.Storage = AppStorage

// const baseUrl = "https://api.abidjan.net";
const baseUrl = "http://127.0.0.1:8000";
axios.defaults.baseURL = baseUrl;

const app = createApp(App);

app.config.globalProperties.axios = axios;
app.config.globalProperties.Token = Token;
app.config.globalProperties.AppStorage = AppStorage;
app.config.globalProperties.User = User;
app.config.globalProperties.baseUrl = baseUrl;
app.config.globalProperties.abj = "https://abidjan.net";

// app.use(vuetify)
app.use(VueSweetalert2, { confirmButtonColor: "#261b64" });
app.use(Routes)
app.use(BootstrapVue)
app.mount('#app')