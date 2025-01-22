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
import { onMounted, computed } from "vue";
import VueDEnsemblePersonalInfo from "@/components/vue-d-ensemble/personal-info.vue";
import VueDEnsembleDashboard from "@/components/vue-d-ensemble/dashboard.vue";
import VueDEnsembleEvenements from "@/components/vue-d-ensemble/evenements.vue";
import VueDEnsemblePrestataires from "@/components/vue-d-ensemble/prestataires.vue";
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
  &__tabs {
    width: fit-content;
    padding: 0.5rem;
    background: white;
    color: black;
    display: flex;
    gap: 0.3rem;
    border-radius: 5rem;
    margin: 0 auto;
    button {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5rem;
      background: white;
      cursor: pointer;
    }
    .active {
      background: black;
      color: white;
      height: 100%;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
