<template>
  <!-- <div class="header">
    <h1>{{ header }}</h1>
  </div> -->
  <div class="header  bg-white chi example">
        <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand "><router-link to="/Simplify" class="text-success link"><b>Simplify Payroll</b></router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <!-- <a class="navbar-brand "><router-link to="/Simplify" class="text-success link"><b>Simplify Payroll</b></router-link></a> -->
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active ">
        <a class="nav-link"><router-link to="/Features" class="text-success link ">Features</router-link><span class="sr-only"></span></a>
      </li>
      <li class="nav-item active ">
        <a class="nav-link btn btn-outline-success"><router-link to="/Form" class=" text-success link">Sign in</router-link></a>
      </li>
      </ul>
  </div>
</nav>
       
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0; 

}

li {
  display: inline-block;
  margin: 0 10px;
  list-style: none;
}
a{
  color: black;
}
.link{
  text-decoration: none;
  color: white;
}


</style>
