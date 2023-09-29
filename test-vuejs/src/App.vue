<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navbar" to="/">Home</RouterLink>
        <RouterLink class="navbar" to="/main">Main</RouterLink>
        <RouterLink class="navbar" to="/settings">Settings</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>