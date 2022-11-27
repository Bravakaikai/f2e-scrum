<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, provide } from "vue";
import store from "@/store/index";
import ProgressBar from "@/components/ProgressBar.vue";

provide("store", store);
const { state, setRole, setName, setBacklog } = store;

onMounted(() => {
  const name = sessionStorage.getItem("name");
  const backlog = sessionStorage.getItem("backlog");
  if (name) {
    setRole(sessionStorage.getItem("role"));
    setName(name);
    state.step = parseInt(sessionStorage.getItem("step"));
  }
  if (backlog) {
    setBacklog(JSON.parse(backlog));
  }
});
</script>

<template>
  <ProgressBar class="min-w-[1200px]" />
  <router-view class="min-w-[1200px] min-h-[790px] overflow-scroll" />
</template>
