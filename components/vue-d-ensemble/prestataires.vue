<template>
  <div>
    <faq />
  </div>
</template>

<script setup lang="ts">
import Faq from "@/components/faq.vue";
</script>

<style scoped>
button {
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 5px;
}

button:hover {
  background-color: #007bff;
  color: white;
}

button:active {
  background-color: #0056b3;
}

.tab-content {
  margin-top: 20px;
}
</style>
