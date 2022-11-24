<script setup>
import { inject } from "vue";
import Layout from "@/layouts/HomeLayout.vue";
import Main from "@/components/home/Main.vue";
import Intro from "@/components/home/Intro.vue";
import PickRole from "@/components/home/PickRole.vue";

const { state } = inject("store");
</script>

<template>
  <Layout>
    <template #default>
      <Main v-if="state.step == 1" />
      <Intro v-if="state.step == 2" />
      <PickRole v-if="state.step == 3" />
    </template>
  </Layout>
</template>
