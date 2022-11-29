<script setup>
import { ref, inject } from "vue";
import DraggableLayout from "@/layouts/DraggableLayout.vue";
import Point from "@/components/sprintPlan/Point.vue";
import Plan from "@/components/sprintPlan/Plan.vue";

const { nextStep } = inject("store");
const step = ref(1);
const stepInfo = [
  {
    title: "估算點數",
    desc: "請使用下拉式選單選擇點數",
  },
  {
    title: "挑選出這次短衝清單任務（加總 20 點）",
    desc: "拖曳估算完成的任務至右邊短衝（Sprint Planning）清單",
  },
];

const next = () => {
  step.value++;
  nextStep(6);
};
</script>

<template>
  <DraggableLayout
    type="sprintPlan"
    :title="`請把下方四項任務按照大致花費時間預估出點數，並且把加總 20 點的\n任務們加入至右邊Sprint Planning，完成一次短衝。`"
    class="flex-center flex-col font-bold"
  >
    <template #default>
      <p class="mt-9 text-xl text-secondary text-center">
        STEP {{ step }}. {{ stepInfo[step - 1].title }}
        <br />
        <span class="text-base font-medium">
          ({{ stepInfo[step - 1].desc }})
        </span>
      </p>
      <Point v-if="step == 1" @point-done="next" />
      <Plan v-else-if="step == 2" />
    </template>
  </DraggableLayout>
</template>
