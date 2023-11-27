
<script setup>
    const currentDate = new Date().toDateString();
</script>

<template>
    <div class="container">
      <h1 class="journey_h1">Your Journey</h1>
      <p>{{currentDate}}</p>
      <RouterLink class="button_small" to="/breakfast">Breakfast</RouterLink>
      <RouterLink class="button_small" to="/dinner">Dinner</RouterLink>
      <RouterLink class="button_small" to="/after">After</RouterLink>
      <RouterLink class="button_small" to="/snack">Snack</RouterLink>
    </div>
</template>