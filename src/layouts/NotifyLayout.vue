<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";

defineProps({
  title: String,
  bgType: "Jira" | "Confluence",
  nextPageName: String,
});

const bgInfo = {
  Jira: "https://my.spline.design/jira-a71fefa0495a52f950558bbddc1c35f1/",
  Confluence:
    "https://my.spline.design/untitledcopy-3d859facaaf0a83baf9d363d37f93952/",
};

const loading = ref(true);
const router = useRouter();
</script>

<template>
  <div class="bg relative py-16 font-bold">
    <p class="mb-10 text-center text-secondary font-bold whitespace-pre-line">
      {{ title }}
    </p>
    <div class="mx-auto w-2/3 h-[65vh] flex-center overflow-hidden">
      <iframe
        :src="bgInfo[bgType]"
        frameborder="0"
        width="140%"
        height="140%"
        class="relative"
        :class="loading ? '' : 'bg-transparent bg-none'"
        @load="loading = false"
      />
      <img
        src="@/assets/img/leftDialog.png"
        alt="icon"
        class="absolute top-1/3 left-1/3"
      />
      <img
        src="@/assets/img/rightBlueDialog.png"
        alt="icon"
        class="absolute right-[30%]"
      />
      <img
        src="@/assets/img/rightBrownDialog.png"
        alt="icon"
        class="h-[63px] absolute top-1/4 right-1/3"
      />
    </div>
    <Button
      class="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] w-[228px] z-10"
      title="收信去 !"
      @click="router.push({ name: nextPageName })"
    />
  </div>
</template>
