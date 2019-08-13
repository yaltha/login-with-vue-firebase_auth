import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = ''
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4czggg_RBsO3MSmy7nZDMSo_Xl449fPc",
  authDomain: "login-vue-firebase-c66a2.firebaseapp.com",
  databaseURL: "https://login-vue-firebase-c66a2.firebaseio.com",
  projectId: "login-vue-firebase-c66a2",
  storageBucket: "",
  messagingSenderId: "465773084488",
  appId: "1:465773084488:web:743feadf0996a39e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
