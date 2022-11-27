<script setup>
import { ref } from "vue";

const imgList = ref(["Jira", "Confluence", "HexSchool", "TitanSoft"]);

const getImageUrl = (name) => {
  return new URL(`/src/assets/svg/logo/${name}.svg`, import.meta.url);
};
</script>

<template>
  <div class="flex py-8 pl-[160px] w-full bg-white">
    <img
      v-for="(item, index) in imgList"
      :key="index"
      :src="getImageUrl(item)"
      :alt="`${item} logo`"
    />
  </div>
</template>

<style lang="scss" scoped>
img + img {
  margin-left: 58px;
}
</style>
