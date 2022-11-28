<script setup>
import { ref, inject } from "vue";
import Card from "@/components/Card.vue";
import SendBy from "@/components/SendBy.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";

const { nextStep } = inject("store");
const router = useRouter();

const step = ref(0);
const next = () => {
  const data = checkList.value[step.value];
  if (data.ans == null) {
    alert("請選擇回饋");
    return;
  } else if (data.ans != data.correct) {
    alert("記得要正面表述呦~");
    return;
  }

  if (step.value == checkList.value.length - 1) {
    router.push({ name: "end" });
    nextStep(10);
    return;
  }
  step.value++;
  window.scrollTo(0, 0);
};

const checkList = ref([
  {
    topic: "做得好的地方",
    items: [
      "這次我幫了很多人救火耶～",
      "大家在開發上都會互相cover，讓任務都有準時在時間內完成。",
    ],
    correct: 1,
    ans: null,
  },
  {
    topic: "可以再做得更好的地方",
    items: [
      "可以記錄這次的開發時間，讓預估隊點數可以更精準。",
      "開發時間預估不準確，請後端下次改進，避免 Delay 到我。",
    ],
    correct: 0,
    ans: null,
  },
]);
</script>

<template>
  <div
    class="bg relative pt-[112px] px-24 py-16 flex flex-col justify-center items-center text-primary font-bold"
  >
    <Card
      class="relative mx-auto py-10 pr-[60px] pl-[180px] w-4/5 min-w-[760px] text-primary max-w-[1000px]"
    >
      <template #default>
        <HeadShot class="cardHeadShot shadow" role-type="rabbit" />
        <div>
          <p class="leading-9">
            哇新來的，你真的很幸運，今天剛好是開發 B 組的
            Retro，你也來見識一下，看看 Retro 都該做些什麼吧！
            我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些是可以繼續改善的地方？並記錄在
            Confluence 中。
            <br />
            <br />
            Retro 重點在於『正面表述』，請思考看看
            <span class="text-secondary underline">{{
              checkList[step].topic
            }}</span
            >， 你認為下列哪一個回饋比較合適呢 ?
          </p>
          <SendBy name=" Development Team , GINA" />
        </div>
        <img
          src="@/assets/svg/dvMessage/tool.svg"
          alt="Confluence"
          class="absolute top-0 right-[-20px] translate-y-[-70%]"
        />
      </template>
    </Card>
    <ul class="mt-12 mx-auto w-4/5 max-w-[1000px]">
      <li
        v-for="(item, index) in checkList[step].items"
        :key="index"
        class="relative item p-5 pl-20 text-lg"
        :class="
          checkList[step].ans == index ? 'before:bg-warn' : 'before:bg-white'
        "
        @click="checkList[step].ans = index"
      >
        {{ item }}
      </li>
    </ul>
    <Button class="mx-auto mt-16 w-[228px] z-10" title="完成！" @click="next" />
  </div>
</template>

<style lang="scss" scoped>
.item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -4px;
  border: 2px dashed theme("colors.yellow");
  border-radius: 80px;
  width: 70px;
  height: 70px;
}
.item + .item {
  margin-top: 24px;
}
</style>
