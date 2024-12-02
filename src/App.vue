<template>
  <div class="h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoading = ref(true)
</script>
