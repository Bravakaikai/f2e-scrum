<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="home relative font-bold">
    <iframe
      src="https://my.spline.design/3dtextbluecopy-53a728fd223a810a8faa94eabbb7e829/"
      frameborder="0"
      class="relative w-full h-[calc(100vh-28px)] min-h-[760px]"
    />
    <slot class="z-10" />
    <Footer class="absolute bottom-0 z-10" />
  </div>
</template>

<style lang="scss" scoped>
.home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(30, 33, 88, 0.5) 0%,
    rgba(72, 77, 209, 0) 135.09%
  );
  z-index: 1;
}
</style>
