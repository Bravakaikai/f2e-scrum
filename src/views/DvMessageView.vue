<script setup>
import { ref, inject } from "vue";
import Intro from "@/components/dvMessage/Intro.vue";
import Review from "@/components/dvMessage/Review.vue";

const { state, nextStep } = inject("store");
const step = ref(1);

const next = () => {
  step.value++;
  nextStep(8);
};
</script>

<template>
  <div class="bg relative px-[258px] py-16 text-primary font-bold leading-9">
    <Intro v-if="step == 1" @next="next" />
    <Review v-else-if="step == 2" />
  </div>
</template>
