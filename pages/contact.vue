<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__title">
        <h1>Allo, oui j'écoute ?!</h1>
        <span>Une question ? Une réponse !</span>
      </div>
      <Faq />
    </div>
    <img :src="contact" alt="contact-form" class="contact__image" />
  </div>
</template>
<script setup lang="ts">
import contact from "@/assets/page-contact/contact.jpg";
import Faq from "@/components/faq.vue";
</script>
<style lang="scss" scoped>
h1 {
  font-family: $font-family-secondary;
  font-weight: $font-weight-medium;
  font-size: 2.5rem;
  margin: $margin-none;
  color: $color-secondary;
}
.contact {
  @include flex(space-between, row);
  &__container {
    @include flex(space-between, column);
    height: calc(100vh - 7rem);
    align-items: flex-start;
  }
  &__title {
    text-align: left;
    gap: 1rem;
  }
  &__image {
    width: 50vw;
    height: calc(100vh - 7rem);
    object-fit: cover;
    border-radius: $border-radius-small;
  }
}
</style>
