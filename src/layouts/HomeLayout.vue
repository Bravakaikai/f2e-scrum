<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="font-bold">
    <iframe
      src="https://my.spline.design/3dtextbluecopy-53a728fd223a810a8faa94eabbb7e829/"
      frameborder="0"
      class="w-screen h-screen"
    />
    <slot />
    <Footer class="absolute bottom-0" />
  </div>
</template>
