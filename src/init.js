import Vue from "vue";
import Router from "vue-router";
import Vuelidate from "vuelidate";
import VueToast from "vue-toast-notification";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "vue-toast-notification/dist/theme-sugar.css";
import "@/assets/styles/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/Services/configureAxios";

Vue.use(Router);
Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(Vuex);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
