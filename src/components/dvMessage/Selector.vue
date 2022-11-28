<script setup>
import { ref } from "vue";
import { introTopicList } from "@/assets/data/memo";

const props = defineProps({
  type: "dailyScrum" | "sprintReview" | "sprintRetrospective",
});
const { type } = props;
const emit = defineEmits(["change"]);

const ans = ref(null);
const validate = () => {
  return ans.value?.url == type;
};
const change = () => {
  const valid = validate();
  emit("change", { name: type, valid });
};
</script>

<template>
  <div class="item px-4 w-[180px] h-[90px] bg-[#FBEDD3]">
    <select
      v-model="ans"
      class="w-full h-full bg-transparent text-center cursor-pointer outline-none whitespace-normal"
      style="word-wrap: break-word"
      @change="change"
    >
      <option :value="null">請選擇</option>
      <option v-for="item in introTopicList" :key="item.en" :value="item">
        {{ item.topic }}
        {{ item.en }}
      </option>
    </select>
  </div>
</template>
