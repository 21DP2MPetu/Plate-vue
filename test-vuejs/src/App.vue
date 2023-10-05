<script setup>
import { RouterLink, RouterView } from 'vue-router';
import {isGameStarted} from './assets/script.js';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav_main">
        <div class="first">
          <RouterLink :disabled="isGameStarted" class="button_default" to="/">Home</RouterLink>
          <RouterLink :disabled="isGameStarted" class="button_default" to="/main">Main</RouterLink>
          <RouterLink :disabled="isGameStarted" class="button_default" to="/settings">Settings</RouterLink>
        </div>
        <div class="second">
          <RouterLink :disabled="isGameStarted" class="button_light_blue" to="/sign_up">Sign Up</RouterLink>
          <RouterLink :disabled="isGameStarted" class="button_light_blue" to="/sign_in">Sign In</RouterLink>
        </div>
        

      </nav>
    </div>
  </header>

  <RouterView />
</template>