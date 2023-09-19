import { createApp } from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Routes from "./utils/routes.js";
import User from "./utils/User";
import AppStorage from "./utils/AppStorage";
import Token from './utils/Token';
import axios from 'axios';
import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";
import './styles/css/style.css'
import './styles/modules/bootstrap/css/bootstrap.min.css'
import './styles/modules/fontawesome/css/all.min.css'

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
app.use(VueSweetalert2, { confirmButtonColor: "#007bff" });
app.use(Routes)
app.mount('#app')