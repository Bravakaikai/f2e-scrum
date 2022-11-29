<script setup>
import { ref, inject } from "vue";
import { introTopicList } from "@/assets/data/memo";
import Card from "@/components/Card.vue";
import SendBy from "@/components/SendBy.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const { state } = inject("store");
const emit = defineEmits(["next"]);
const step = ref(0);

const getImageUrl = (name) => {
  return new URL(`/src/assets/svg/dvMessage/${name}.svg`, import.meta.url);
};
const getBtnTitle = () => {
  switch (step.value) {
    case 0:
      return "看小抄";
    case messageList.length - 1:
      return "記下了";
    default:
      return "下一則";
  }
};
const next = () => {
  if (step.value == messageList.length - 1) {
    emit("next");
  } else {
    step.value++;
    window.scrollTo(0, 0);
  }
};

const messageList = [
  `你還不知道什麼是 Sprint 吧？讓我先為你介紹一下吧！\nSprint 是一個短衝，開發團隊會在這期間執行開發。\n\n在這段期間內，開發團隊舉辦每日站立會議 (Daily Scrum)，追蹤成員的工作狀況。除了每日站立會議，在 Sprint 的結束也會包含短衝檢視會議 (Sprint Review)、短衝自省會議 (Sprint Retrospective)。\n\n接下來會做個小小測驗，在這裡先偷偷塞一張小紙條給 ${state.name} 惡補喔！`,
  "昨天為團隊的短衝目標（Sprint Goal）做了哪些進度，\n今天我會如何準備來幫助團隊達到短衝目標，\n過程中有遇到什麼問題、難題...",
  "用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。",
  "團隊在自省會議裡，\n會共同回顧該短衝歷程發生的事情、\n好的地方、\n可以改進的地方、\n如何維持我們已有的成功經驗。",
];
</script>

<template>
  <div class="text-lg">
    <div class="h-[412px]">
      <Card class="relative mx-auto mt-8 py-10 pr-[56px] pl-[198px]">
        <template #default>
          <HeadShot class="cardHeadShot shadow" role-Type="rabbit" />
          <div v-show="step > 0" class="flex items-center mb-11">
            <img
              :src="getImageUrl(introTopicList[step - 1]?.url)"
              :alt="introTopicList[step - 1]?.topic"
              class="h-[60px]"
            />
            <img
              v-if="step == 1"
              src="@/assets/svg/dvMessage/time.svg"
              alt="每天15分鐘"
              class="ml-8 h-10"
            />
            <img
              v-else-if="step == 3"
              src="@/assets/svg/dvMessage/tool.svg"
              alt="Confluence"
              class="absolute top-0 right-[-20px] translate-y-[-70%]"
            />
          </div>
          <p class="whitespace-pre-line leading-9">
            {{ messageList[step] }}
          </p>
          <SendBy name="Development Team , GINA" />
        </template>
      </Card>
    </div>
    <div class="my-[52px] flex justify-between">
      <div
        v-for="(item, index) in introTopicList"
        :key="item.name"
        class="item w-[280px] rounded-[80px]"
        :class="step == index + 1 ? 'active' : ''"
        @click="step = index + 1"
      >
        <p class="text-center">
          {{ item.topic }} <br />
          {{ item.en }}
        </p>
      </div>
    </div>
    <Button class="mx-auto w-[228px]" :title="getBtnTitle()" @click="next" />
  </div>
</template>

<style lang="scss" scoped>
.active {
  @apply bg-primary text-white;
}
</style>
