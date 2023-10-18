<script setup>
  var username;
  var password;
  var isAdmin;

  function SignIn() {
    if (username == "admin" || password == "0000") {
      isAdmin = true;
      console.log("admin");
    }

  }
</script>

<template>
  <div class="container">
    <h1 class="light_blue">Login</h1>
    <p>Username: <input v-model=username type="text"></p>
    <p>Password: <input v-model=password type="password"></p>
    <button @click="SignIn" class="button_light_blue">OK</button>
  </div>
</template>

    
