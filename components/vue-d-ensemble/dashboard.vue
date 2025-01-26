<template>
  <div class="dashboard" v-if="user && user.projet">
    <base-card class="dashboard__evenement-actuel">
      <template #header> Evènement actuel: </template>
      <template #content>{{ user?.projet[0].nom }} &#x1F389</template>
    </base-card>
    <base-card class="dashboard__nombre-evenement">
      <template #header> Nombre d'évènement(s) créé(s): </template>
      <template #content>{{ user?.projet.length }}</template>
    </base-card>
    <base-card class="dashboard__invite">
      <template #header> Personnes invités: </template>
      <template #description> Depuis 1 an</template>
      <template #content>{{ nombreInvite }}</template>
    </base-card>
       <base-card class="dashboard__a-definir">
      <template #header> Memo: </template>
      <template #content>{{ nombreInvite }}</template>
    </base-card >
    <base-card class="dashboard__evenement-resume">
    <template #header> Récapitulatif de ton évènement: </template>
    <template #content>
      <div><span class="dashboard__titre">Nom de l'évènement: </span>{{ user.projet[0].nom }}</div>
    </template>
  </base-card>
  </div>
</template>
<script setup lang="ts">
import BaseCard from "@/commun/base-card.vue";
import { useUserStore } from "@/stores/User";
import { storeToRefs } from "pinia";
const { user } = storeToRefs(useUserStore());

const nombreInvite = computed(() => {
  const initialValue = 0;
  const invite = user.value.projet.map((projet) => projet.nombreInvite)
  const sumWithInitial = invite.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
  );

return sumWithInitial;
})
</script>
<style lang="scss" scoped>
.dashboard{
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 16px;
grid-row-gap: 8px;

&__evenement-actuel { grid-area: 1 / 1 / 2 / 2; }
&__nombre-evenement { grid-area: 1 / 2 / 2 / 3; }
&__invite { grid-area: 1 / 3 / 2 / 4; }
&__a-definir { grid-area: 1 / 4 / 4 / 6; }
&__evenement-resume { grid-area: 2 / 1 / 4 / 4; }

}
</style>
