<template>
  <div class="mon-espace">
    <div class="mon-espace__tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.name }}
      </button>
    </div>
    <component :is="currentTab" class="tab-content" />
  </div>
</template>
<script lang="ts" setup>
import VueDEnsembleDashboard from "@/components/vue-d-ensemble/dashboard.vue";
import VueDEnsembleEvenements from "@/components/vue-d-ensemble/evenements.vue";
import VueDEnsemblePersonalInfo from "@/components/vue-d-ensemble/personal-info.vue";
import VueDEnsemblePrestataires from "@/components/vue-d-ensemble/prestataires.vue";
import { computed, onMounted } from "vue";
const activeTab = ref(0);

const currentTab = computed(() => tabs[activeTab.value].component);

const tabs = [
  {
    name: "Dashboard",
    component: VueDEnsembleDashboard,
  },
  {
    name: "Mon profil",
    component: VueDEnsemblePersonalInfo,
  },
  {
    name: "Mes évènements",
    component: VueDEnsembleEvenements,
  },
  {
    name: "Mes prestataires",
    component: VueDEnsemblePrestataires,
  },
];
onMounted(() => useUser().setUserInfo());
</script>
<style lang="scss" scoped>
.mon-espace {
  margin: 0 2rem;
  &__tabs {
    width: fit-content;
    padding: $padding-small;
    background: $white;
    color: $black;
    display: flex;
    gap: 0.3rem;
    border-radius: $border-radius-large;
    margin: $margin-none auto 3rem;
    button {
      border: 0;
      padding: $padding-small $padding-medium;
      border-radius: $border-radius-large;
      background: $white;
      cursor: pointer;
    }
    .active {
      background: $black;
      color: $white;
      height: 100%;
      padding: $padding-small $padding-medium;
    }
  }
}
</style>
