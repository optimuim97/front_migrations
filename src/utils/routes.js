import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../components/views/Login.vue";
import Dash from "../components/views/Dash.vue"
import FileList from "../components/views/FileList.vue"
import FileMerge from "../components/views/FileMerge.vue"

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes: [
    {
      path: "/connexion",
      name: "Login",
      component: Login,
      alias: "/",
    },
    {
      path: "/dash",
      name: "Dash",
      component: Dash
    },
    {
      path: "/fileList",
      name: "FileList",
       component: FileList
    },
    {
      path: "/fileMerge",
      name: "FileMerge",
      component: FileMerge
    },
  ],
});

export default router;
