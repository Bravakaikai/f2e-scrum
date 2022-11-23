<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import Layout from "@/layouts/HomeLayout.vue";
import Main from "@/components/home/Main.vue";
import Intro from "@/components/home/Intro.vue";
import Role from "@/components/home/Role.vue";

const { state } = inject("store");
const router = useRouter();
</script>

<template>
  <Layout>
    <template #default>
      <Main v-if="state.step == 1" />
      <Intro v-if="state.step == 2" />
      <Role v-if="state.step == 3" />
    </template>
  </Layout>
</template>
