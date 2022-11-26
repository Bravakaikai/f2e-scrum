<script setup>
import { inject } from "vue";
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const { state } = inject("store");

const router = useRouter();
const step = ref(0);
const next = () => {
  if (step.value == messageList.length - 1) {
    router.push({ name: "home" });
  } else {
    step.value++;
  }
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
      "嗨嗨! 我是這次的 Scrum Master 福福，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。介紹一下我們開發團為的成員唷～ 目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。",
  },
  {
    from: "rabbit",
    name: "Development Team , GINA",
    message: `Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。\n那麼你來試試看把剛剛收到的清單標註上點數後，選出任務並且控制在20點內，完成一次的短衝清單，麻煩 ${state.name} 囉 ~`,
  },
];
</script>

<template>
  <div class="bg relative px-[258px] py-16 font-bold">
    <div class="flex justify-end">
      <HeadShot
        v-for="(item, index) in messageList"
        v-show="index != step"
        :roleType="messageList[index].from"
        :key="index"
        class="ml-11 w-[150px] h-[150px] opacity-25"
      />
    </div>
    <Card
      class="relative mx-auto mt-8 pt-20 pr-[72px] pb-[66px] pl-[198px] text-primary"
    >
      <template #default>
        <HeadShot
          class="absolute top-[-25px] left-[-25px] shadow"
          :roleType="messageList[step].from"
        />
        <p class="whitespace-pre-line leading-9">
          {{ messageList[step].message }}
        </p>
        <p class="mt-2 flex justify-end text-[#6C6C6C] font-normal">
          {{ messageList[step].name }}
          <img class="ml-5 w-6" src="@/assets/svg/icon/plane.svg" alt="icon" />
        </p>
      </template>
    </Card>
    <Button
      class="mx-auto mt-16 w-[228px] z-10"
      :title="step == messageList.length - 1 ? '挑戰！' : '下一則'"
      @click="next()"
    />
  </div>
</template>
