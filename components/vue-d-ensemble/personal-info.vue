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
import { useUserStore } from "@/stores/User";
import { useUser } from "@/composables/UseUser";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import noPp from "@/assets/noPp.png";

const { user } = storeToRefs(useUserStore());
const fullAdress = computed(() => {
  return `${user.value.adresse} ${user.value.codePostal} ${user.value.ville}, ${user.value.pays}`;
});
</script>

<style lang="scss" scoped>
.personal-info {
  &__profil-picture {
    display: flex;
    border-radius: 0.5rem;
    img {
      object-fit: cover;
      width: 7rem;
      height: 7rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
