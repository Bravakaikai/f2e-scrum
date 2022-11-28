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
  <div
    class="bg relative py-16 flex-center flex-col text-primary font-bold leading-9"
  >
    <Intro v-if="step == 1" @next="next" class="w-4/5 max-w-[1000px]" />
    <Review v-else-if="step == 2" class="w-4/5 max-w-[1000px]" />
  </div>
</template>
