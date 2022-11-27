<script setup>
import { inject } from "vue";
import NotifyLayout from "@/layouts/NotifyLayout.vue";

const { state } = inject("store");
</script>

<template>
  <NotifyLayout
    v-if="state.step == 4"
    :title="'您有三封新訊息 !\n 請速點擊及查收吧 ~'"
    bg-type="Jira"
    next-page-name="message"
  />
  <NotifyLayout
    v-else
    :title="'Development Team 發了消息來\n快點打開看看吧 !'"
    bg-type="Confluence"
    next-page-name="dvMessage"
  />
</template>
