<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">VUEAPP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class='navlink'  to="/">Form</router-link>
          <router-link class='navlink' to="/secondform">Todo App</router-link>
          <router-link class='navlink' to="/counter">Counter</router-link>
          <router-link class='navlink' to="/getdata">Get Data</router-link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>
<style scoped>
   .navlink{
    margin-left: 20px;
    color: teal;
    font-weight: bold;
    list-style: none;
    text-decoration: none;
    
   }

   .navlink:hover{
    text-decoration: underline;
   }
   .logo{
    font-weight: bold;
    color: teal;
   }
</style>