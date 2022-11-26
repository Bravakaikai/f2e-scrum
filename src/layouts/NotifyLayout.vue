<script setup>
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";

defineProps({
  title: String,
  bgType: "Jira" | "Confluence",
  nextPageName: String,
});

const bgInfo = {
  Jira: "https://my.spline.design/untitled-6ed34a87641b015d4f3a5c763ee4e175/",
  Confluence:
    "https://my.spline.design/untitled-0b994b13b55b1b2ffec16849dc1db985/",
};

const router = useRouter();
</script>

<template>
  <div class="bg relative py-16 font-bold">
    <p class="mb-10 text-center text-secondary font-bold whitespace-pre-line">
      {{ title }}
    </p>
    <div
      class="mx-auto w-2/3 h-[65vh] overflow-hidden flex justify-center items-center"
    >
      <iframe
        :src="bgInfo[bgType]"
        frameborder="0"
        width="140%"
        height="140%"
      />
    </div>
    <Button
      class="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] w-[228px] z-10"
      title="收信去 !"
      @click="router.push({ name: nextPageName })"
    />
  </div>
</template>
