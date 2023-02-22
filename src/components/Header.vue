<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">
      <img src="../assets/vue.svg" alt='vue' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class='navlink'  to="/">Home</router-link>
          
        </li>
        <li class="nav-item">
          <router-link class='navlink'  to="/form">Form</router-link>
          
        </li>
        <li class="nav-item">
         
          <router-link class='navlink' to="/secondform">Todo App</router-link>
         
         
        </li>
        <li class="nav-item">
          <router-link class='navlink' to="/counter">Counter</router-link>
          
        </li>
        <li class="nav-item">
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
.navlink {
  margin-left: 20px;
  color: #38b883;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;

}

.navlink:hover {
  text-decoration: underline;
  color:#35495e ;
}

.logo {
  font-weight: bold;
  color: teal;
}

nav{
  border-bottom: 1px solid #38b883;
}
</style>