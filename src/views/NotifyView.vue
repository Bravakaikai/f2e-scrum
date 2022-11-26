<script setup>
import NotifyLayout from "@/layouts/NotifyLayout.vue";
</script>

<template>
  <NotifyLayout
    :title="`您有三封新訊息 !\n 請速點擊及查收吧 ~`"
    bg-type="Jira"
    next-page-name="message"
  />
</template>

<style lang="scss" scoped></style>
