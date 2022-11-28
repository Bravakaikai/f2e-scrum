<script setup>
defineProps({
  type: "productBacklog" | "sprintPlan",
  title: String,
  nextPageName: String,
});
const getImageUrl = (type) => {
  return new URL(`/src/assets/svg/${type}/title.svg`, import.meta.url);
};
</script>

<template>
  <div class="bg relative pt-12 pb-14 font-bold">
    <div class="relative z-10">
      <div class="flex-center">
        <img
          :src="getImageUrl(type)"
          :alt="type == 'productBacklog' ? '產品待辦清單' : '短衝待辦清單'"
        />
        <p class="ml-[60px] text-secondary text-xl whitespace-pre-line">
          {{ title }}
        </p>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg::before {
  content: "";
  position: absolute;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  background: url("@/assets/svg/productBacklog/bg.svg");
}
</style>

<style lang="scss">
.dragItem {
  @apply border-2 rounded-[10px] border-yellow border-dashed bg-white text-primary text-lg;
}
.dragItem:nth-child(1) {
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.dragItem:last-child {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
