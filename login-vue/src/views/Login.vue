<template>
    <div class="login">
        <h3>Sign In</h3>       
        <input v-model="email" type="text" placeholder="Email"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <button @click="login">Login</button>
        <p>You don't have an account? <router-link to="/signup">Create one</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(){
      return{
          email:'',
          password:''
      }
  },
  methods:{
      login:function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user)=>{
                  //alert('Well done!, Now you are logged in')
                  this.$router.replace('home');
              },
              (err)=>{
                  alert('Ooops! '+ err.message)
              }
          )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    margin-top: 40px;
}
input{
    margin: 10px 0;
    padding: 15px;
    width: 20%;
}
button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    font-size: 18px;
}
p{
    margin-top: 40px;
    font-size: 13px;
}
p a{
    text-decoration: underline;
    cursor: pointer;
}
</style>
