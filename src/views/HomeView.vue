<script setup>
import { inject, onMounted, ref } from "vue";
import Layout from "@/layouts/HomeLayout.vue";
import Main from "@/components/home/Main.vue";
import Intro from "@/components/home/Intro.vue";
import PickRole from "@/components/home/PickRole.vue";

const { state, nextStep } = inject("store");
onMounted(() => {
  state.step = 0;
});

const step = ref(0);
const next = () => {
  step.value++;
  if (step.value == 2) {
    nextStep(1);
  }
};
</script>

<template>
  <Layout>
    <template #default>
      <Main
        v-if="step == 0"
        class="animate__animated animate__fadeInDown"
        @next="next"
      />
      <Intro
        v-else-if="step == 1"
        class="animate__animated animate__fadeInDown z-10"
        @next="next"
      />
      <PickRole
        v-else-if="step == 2"
        class="animate__animated animate__fadeInDown"
      />
    </template>
  </Layout>
</template>
