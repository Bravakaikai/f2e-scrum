<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <p class="mt-2 flex justify-end text-gray text-lg font-normal">
    {{ name }}
    <img class="ml-5 w-6" src="@/assets/svg/icon/plane.svg" alt="icon" />
  </p>
</template>
