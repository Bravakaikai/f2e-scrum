<script setup>
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(["next"]);

const introList = [
  {
    title: "Product Backlog",
    name: "產品待辦清單",
    desc: "由產品負責人 (PO) 負責整理產品願景圖，並以產品代辦事項 (Item) 為單位排列優先順序。",
  },
  {
    title: "Sprint Planning",
    name: "短衝規劃會議",
    desc: "每個短衝 (Sprint) 的起始，由全員共同參與討論交付到市場的目標。",
  },
  {
    title: "Sprint Review",
    name: "短衝檢視會議",
    desc: "藉由蒐集使用回饋和市場反應討論未來工作方向調整，向利害關係人 (Stakeholder) 展示工作結果。",
  },
  {
    title: "Sprint Retrospective",
    name: "短衝自省會議",
    desc: "短衝結束進行工作成果討論與產品現況，並針對團隊狀態與工作流程進行改善。",
  },
];
</script>

<template>
  <div
    class="absolute top-0 px-20 w-screen h-[calc(100vh-113px)] flex flex-col justify-center items-center"
  >
    <Card
      class="relative py-10 pr-[60px] pl-[172px] w-2/3 min-w-[850px] text-primary"
    >
      <template #default>
        <HeadShot
          class="absolute top-[-6px] left-0 translate-x-[-45%] shadow"
        />
        <div class="flex items-center">
          <p>
            福福貼心幫你排序好專有名詞了
            <br />
            若沒問題，請按下「接受挑戰」按鈕，迎接成功通過 Scrum
            新手村的挑戰吧！
          </p>
          <Button
            class="ml-6 w-[220px]"
            title="接受挑戰"
            @click="emit('next')"
          />
        </div>
      </template>
    </Card>
    <div class="mt-20 flex justify-between text-secondary">
      <div
        v-for="(item, index) in introList"
        :key="index"
        class="introCard relative p-10 border-[6px] border-solid border-yellow w-[332px] rounded-[30px] bg-white"
      >
        <div class="flex items-center border-b-2 border-solid border-yellow">
          <div
            class="mr-[10px] w-[44px] h-[44px] bg-yellow text-secondary rounded-full flex justify-center items-center text-2xl"
          >
            {{ index + 1 }}
          </div>
          <h3 class="py-4 text-xl">
            {{ item.title }} <br />
            <span class="text-lg text-primary">{{ item.name }}</span>
          </h3>
        </div>
        <p class="mt-[10px]">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introCard + .introCard {
  margin-left: 12px;
}
.introCard + .introCard::before {
  content: ">";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-75%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: white;
  background: rgba(255, 182, 96, 0.62);
  border-radius: 50%;
}
</style>
