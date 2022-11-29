<script setup>
import { inject, reactive } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import SendBy from "@/components/SendBy.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";
import Selector from "@/components/dvMessage/Selector.vue";

const { state, nextStep } = inject("store");
const router = useRouter();

const ans = reactive({
  dailyScrum: false,
  sprintReview: false,
  sprintRetrospective: false,
});

const updateAns = (e) => {
  ans[e.name] = e.valid;
};

const done = () => {
  if (ans.dailyScrum && ans.sprintReview && ans.sprintRetrospective) {
    router.push({ name: "retro" });
    nextStep(9);
  } else {
    alert("咦？再試試吧！");
  }
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex items-end min-w-[920px]">
      <Card class="relative py-10 pr-[60px] pl-[180px] w-3/4 text-primary">
        <template #default>
          <HeadShot
            class="absolute top-[-6px] left-[-6px] translate-x-[-25%] shadow"
            role-type="rabbit"
          />
          <div>
            <p>
              好啦！說了這麼多，{{ state.name }}，該來考考你到底記得多少了吧！
              在下方的 Scrum
              流程圖中，這些流程分別代表哪些會議呢？請你將貼紙貼到對應的格子內，正確答題才會出現完成按鈕唷！
            </p>
            <SendBy name=" Development Team , GINA" />
          </div>
        </template>
      </Card>
      <Button class="ml-9 px-12 h-[52px]" title="完成" @click="done()" />
    </div>
    <div
      class="relative mt-10 px-20 py-10 w-[920px] bg-[#f7f9f3] rounded-[60px]"
    >
      <Selector
        type="dailyScrum"
        class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%]"
        @change="updateAns"
      />
      <Selector
        type="sprintReview"
        class="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[-25%]"
        @change="updateAns"
      />
      <Selector
        type="sprintRetrospective"
        class="absolute right-0 bottom-0 translate-x-[-75%] translate-y-[-25%]"
        @change="updateAns"
      />
      <img src="@/assets/svg/dvMessage/review.svg" alt="Review" />
    </div>
  </div>
</template>
