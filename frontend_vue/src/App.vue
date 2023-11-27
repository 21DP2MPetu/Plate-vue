<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav_main">
        <div class="first">
          <RouterLink class="button_default" to="/">Home</RouterLink>
          <RouterLink class="button_journey" to="/your_journey">Your Journey</RouterLink>
        </div>
        <div class="second">
          <RouterLink class="button_light_blue" to="/sign_up">Sign Up</RouterLink>
          <RouterLink class="button_light_blue" to="/sign_in">Sign In</RouterLink>
        </div>
        

      </nav>
    </div>
  </header>

  <RouterView />
</template>