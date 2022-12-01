<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, reactive } from "vue";
import Card from "./components/Card.vue";
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.movies {
}
</style>
