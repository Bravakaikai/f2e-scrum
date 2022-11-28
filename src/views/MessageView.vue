<script setup>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import SendBy from "@/components/SendBy.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const { state, nextStep } = inject("store");

const router = useRouter();
const step = ref(0);
const next = () => {
  if (step.value == messageList.length - 1) {
    router.push({ name: "sprintPlan" });
    nextStep(5);
    return;
  }
  step.value++;
  window.scrollTo(0, 0);
};

const messageList = [
  {
    from: "frog",
    name: "Product Owner , KELLY",
    message:
      "產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議（Sprint Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。",
  },
  {
    from: "bear",
    name: "Scrum Master , 福福小精靈",
    message:
      "嗨嗨! 我是這次的 Scrum Master 福福，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。",
  },
  {
    from: "rabbit",
    name: "Development Team , GINA",
    message: `Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。\n接下來想請你來試試，把剛剛收到的清單標註上點數後，選出任務並且控制在20點內，完成一次的短衝清單，麻煩 ${state.name} 囉！`,
  },
];
</script>

<template>
  <div class="bg relative px-[258px] py-16 font-bold flex-center">
    <div class="w-4/5 max-w-[1000px]">
      <div class="relative flex justify-end w-4/5">
        <HeadShot
          v-for="(item, index) in messageList"
          v-show="index != step"
          :role-type="messageList[index].from"
          :key="index"
          class="ml-11 w-[150px] h-[150px] opacity-50"
        />
        <img
          src="@/assets/img/rightSleepDialog.png"
          alt="icon"
          class="absolute right-0 translate-x-[100%]"
        />
        <img
          src="@/assets/img/rightBlueDialog.png"
          alt="icon"
          class="absolute rotateY right-[344px]"
        />
      </div>
      <Card
        class="relative mx-auto mt-8 pt-20 pr-[72px] pb-[66px] pl-[198px] text-primary"
      >
        <template #default>
          <HeadShot
            class="cardHeadShot shadow"
            :role-type="messageList[step].from"
          />
          <p class="whitespace-pre-line leading-9">
            {{ messageList[step].message }}
          </p>
          <SendBy :name="messageList[step].name" />
        </template>
      </Card>
      <Button
        class="mx-auto mt-16 w-[228px] z-10"
        :title="step == messageList.length - 1 ? '挑戰！' : '下一則'"
        @click="next"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rotateY {
  transform: rotateY(180deg);
}
</style>
