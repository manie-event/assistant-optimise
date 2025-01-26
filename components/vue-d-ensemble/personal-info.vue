<template>
  <div class="personal-info">
    <div v-if="user">
      {{ (user.photo, "user photo") }}
      <div class="personal-info__profil-picture">
        <img :src="user.photo ? user.photo : noPp" alt="photo de profil" />
      </div>
      <h3>{{ user.nomComplet }}</h3>
      <h3>{{ user.email }}</h3>
      <h3>{{ user.telephoneNumber }}</h3>
      <h3>{{ fullAdress }}</h3>
      <h3>{{ user.dateNaissance }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import noPp from "@/assets/noPp.png";
import { useUserStore } from "@/stores/User";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { user } = storeToRefs(useUserStore());
const fullAdress = computed(() => {
  return `${user?.value.adresse} ${user.value.codePostal} ${user.value.ville}, ${user.value.pays}`;
});
</script>

<style lang="scss" scoped>
.personal-info {
  &__profil-picture {
    display: flex;
    border-radius: $border-radius-small;
    img {
      object-fit: cover;
      width: 7rem;
      height: 7rem;
      border-radius: $border-radius-small;
    }
  }
}
</style>
