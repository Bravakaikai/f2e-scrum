<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { provide } from "vue";
import store from "@/store/index";

provide("store", store);
</script>

<template>
  <router-view />
</template>
