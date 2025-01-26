<template>
  <div class="accordeon">
    <div class="accordeon__question" @click="isResponseOpen">
      <slot name="question" @click="isResponseOpen"></slot>
      <span v-if="!openedResponse">+</span>
      <span v-else>-</span>
    </div>
    <div class="accordeon__response" v-if="openedResponse">
      <slot name="response"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const openedResponse = ref(false);
const isResponseOpen = () => (openedResponse.value = !openedResponse.value);
</script>
<style lang="scss" scoped>
.accordeon {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: $padding-medium;
  &__question {
    font-family: $font-family-primary;
    font-weight: $font-weight-medium;
    font-size: $font-size-medium;
    @include flex(space-between, row);
    cursor: pointer;
    span {
      margin-left: $margin-medium;
    }
  }
  &__response {
    padding: $padding-medium $padding-large;
  }
}
</style>
