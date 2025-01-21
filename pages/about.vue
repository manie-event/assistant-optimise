import { DashboardPersonalInfo } from '../.nuxt/components'; import { onMounted
} from 'vue';
<template>
  <h1>about</h1>
  <DashboardPersonalInfo></DashboardPersonalInfo>
</template>
<script lang="ts" setup>
onMounted(() => useUser().setUserInfo());
</script>
