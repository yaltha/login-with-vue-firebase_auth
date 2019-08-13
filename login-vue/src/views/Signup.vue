<template>
    <div class="signup">
        <h3>Let's create a new account !</h3>       
        <input v-model="email" type="text" placeholder="Email"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">Login</router-link>.</span>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Signup',
  data(){
      return{
          email:'',
          password:''
      }
  },
  methods:{
      signUp: function(){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              (user)=>{
                  //alert('Your account has been created')
                  this.$router.replace('home');

              },
              (err)=>{
                  alert('Oops! '+err.message)
              }
          )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup{
    margin-top: 40px;
}
input{
    margin: 10px 0;
    padding: 15px;
    width: 20%;
}
button{
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
    font-size: 18px;
}
span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
