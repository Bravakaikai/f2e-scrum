<script setup>
import { inject } from "vue";

const { state } = inject("store");
</script>

<template>
  <div
    class="border-b-[5px] border-solid border-white h-7 bg-[#2E305A] flex"
    :class="clickable ? 'clickable' : ''"
  >
    <div
      v-for="item in state.step"
      :key="item"
      class="col border-solid border-white w-[10%] h-full bg-yellow"
      :class="state.step >= 10 ? 'border-r-none' : 'border-r-[5px]'"
    />
  </div>
</template>
