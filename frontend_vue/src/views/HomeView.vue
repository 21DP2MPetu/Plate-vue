
<script setup>
import { RouterLink } from 'vue-router';


  function MyTest() {
    console.log("Works");
  }
</script>

<template>
    <div class="container">
      <h1>Plate</h1>
      <p>Calorie counter n more!</p>
      <img id="calorie" src="../assets/images/calorie.jpg" alt="calorie">
      <RouterLink class="button_default" to="/sign_up">Start Journey</RouterLink>
    </div>
</template>