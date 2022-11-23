<script setup>
defineProps({
  roleType: "bear" | "frog" | "rabbit",
  clickable: Boolean,
});

const roleRef = {
  bear: "https://my.spline.design/untitled-304a9682045b7f1875aa7e3f19d42d69/",
  frog: "https://my.spline.design/untitled-ac978da383fe784b8e9dc98857ec85bf/",
  rabbit: "https://my.spline.design/untitled-e42a94f106e6a4d4ade39a658adac389/",
};
</script>

<template>
  <div
    class="headShot w-[200px] h-[200px] border-[6px] border-[#F5F5F5] box-border rounded-full overflow-hidden flex items-center justify-center"
    :class="clickable ? 'clickable' : ''"
  >
    <iframe
      :src="roleRef[roleType] ?? roleRef.bear"
      frameborder="0"
      width="180%"
      height="180%"
      class="cursor-pointer"
    />
  </div>
</template>

<style lang="scss" scoped>
.shadow,
.headShot:hover {
  box-shadow: 0px -4px 0px 28px rgba(255, 255, 255, 0.33);
}
.clickable:hover {
  transform: scale(1.2);
  transition-duration: 250ms;
}
</style>
