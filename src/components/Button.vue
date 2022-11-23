<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
    class="btn border-4 border-solid border-transparent rounded-2xl cursor-pointer"
  >
    <p class="py-2 text-xl text-white font-black text-center">
      {{ title }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
  background-image: linear-gradient(to right, #ffb660, #ffb660),
    linear-gradient(to left, #e1a763 100%, #f3f3f3 50%);
  p {
    line-height: 30px;
    letter-spacing: 0.42em;
  }
}
.btn:hover {
  background-image: linear-gradient(to right, #827d7b, #827d7b),
    linear-gradient(to left, #fff 0%, #595959 100%);
}
</style>
