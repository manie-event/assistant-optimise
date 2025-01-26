<template>
  <div>
    <div class="faq-tabs-container">
      <div>
        <span v-for="(tab, index) in faqTabs" :key="index">
          <button
            @click="activeTab = index"
            class="faq-tabs"
            :class="{ active: activeTab === index }"
          >
            {{ tab.name }}
          </button>

          <span v-if="index < faqTabs.length - 1"> | </span>
        </span>
      </div>
      <div class="accordeon-container">
        <base-accordeon
          v-for="faq in foireAuxQuestions[activeTab]"
          :key="faq.question"
        >
          <template #question>{{ faq.question }}</template>
          <template #response>{{ faq.response }}</template>
        </base-accordeon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseAccordeon from "@/commun/base-accordeon.vue";
import { ref } from "vue";

const activeTab = ref(0);
const foireAuxQuestions = ref([
  [
    {
      question: "Ceci est une question particulier",
      response: "Je suis une réponse 1 particulier",
    },
    {
      question: "Celle-ci aussi",
      response: "Je suis une réponse 2 particulier",
    },
  ],
  [
    {
      question: "Ceci est une question prestataire",
      response: "Je suis une réponse 1 prestataire",
    },
    {
      question: "Celle-ci aussi",
      response: "Je suis une réponse 2 prestataire",
    },
  ],
]);

const faqTabs = ref([{ name: "FAQ Particulier" }, { name: "FAQ Prestataire" }]);
</script>

<style lang="scss" scoped>
h1 {
  font-family: $font-family-primary;
  font-weight: $font-weight-medium;
  font-size: 2.5rem;
  margin: $margin-none;
}
.faq-tabs-container {
  width: 40vw;
  @include flex(center, column);
  gap: 5px;
}

.faq-tabs {
  padding: $padding-small $padding-medium;
  cursor: pointer;
  border: none;
  transition: background-color 0.4s ease-in-out;
  &.active {
    text-decoration: underline;
    background-color: rgb(32, 72, 153);
    color: white;
  }
}

.accordeon-container {
  margin-top: 20px;
  @include flex(normal, column);
  gap: 0.25rem;
  width: 100%;
}
</style>
