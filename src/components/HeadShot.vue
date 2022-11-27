<script setup>
import { roleRef } from "@/assets/data/roleInfo";
defineProps({
  roleType: "bear" | "frog" | "rabbit",
  clickable: Boolean,
});
</script>

<template>
  <div
    class="headShot w-[200px] h-[200px] border-[6px] border-[#F5F5F5] box-border bg-white rounded-full overflow-hidden"
    :class="clickable ? 'clickable' : ''"
  >
    <div class="content relative w-[150%] h-[150%] after:none">
      <iframe
        :src="roleRef[roleType]?.sm ?? roleRef.bear.sm"
        frameborder="0"
        width="150%"
        height="150%"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shadow,
.focus,
.headShot:hover {
  box-shadow: 0px -4px 0px 28px rgba(255, 255, 255, 0.33);
}
.content::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: bla;
  cursor: pointer;
}
.focus,
.clickable:hover {
  transform: scale(1.2);
  transition-duration: 250ms;
}
</style>
