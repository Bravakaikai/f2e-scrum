<script setup>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import draggable from "vuedraggable";
import Button from "@/components/Button.vue";

const { state } = inject("store");
const router = useRouter();

const drag = ref(false);
const backlog = ref([
  {
    id: 1,
    title: "會員系統 (登入、註冊、權限管理)",
  },
  {
    id: 2,
    title: "前台職缺列表 (職缺詳細內容、點選可發送應徵意願)",
  },
  {
    id: 3,
    title: "後台職缺管理功能 (資訊上架、下架、顯示應徵者資料)",
  },
  {
    id: 4,
    title: "應徵者的線上履歷編輯器",
  },
]);
</script>

<template>
  <div class="bg relative py-10 font-bold">
    <div class="relative z-10">
      <div class="flex items-center justify-center">
        <img src="@/assets/svg/productBacklog/title.svg" alt="產品待辦清單" />
        <p class="ml-[60px] text-secondary text-xl">
          PO 這邊有收到四個需求，我們一般都是在 Jira 做任務管理，
          <br />
          不過請
          {{ state.name }} 先在下方小試身手依照需求優先度調整清單的待辦順序 !
        </p>
      </div>
      <div
        class="relative py-[60px] flex justify-center items-center border-b-2 border-solid border-secondary box-shadow"
      >
        <div class="flex flex-col justify-between">
          <p class="dot before:bg-[#FF7A7A]">優先度高</p>
          <img
            src="@/assets/svg/productBacklog/arrow.svg"
            alt="Arrow"
            class="h-[400px]"
          />
          <p class="dot before:bg-[#7AB68F]">優先度低</p>
        </div>
        <draggable
          v-model="backlog"
          group="transition-group"
          :component-data="{ name: 'fade' }"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <li class="relative flex">
              <span class="dragItem px-7 py-3">
                {{ element.title }}
              </span>
              <img
                src="@/assets/svg/productBacklog/bar.svg"
                alt="bar"
                class="dragItem ml-[-1px] w-[56px] h-[56px] p-2"
              />
            </li>
          </template>
        </draggable>
        <Button
          class="mt-auto ml-10 w-1/6"
          title="排好了"
          @click="router.push({ name: 'notify' })"
        />
      </div>
      <div class="mt-10 mx-auto flex justify-center w-2/3">
        <img src="@/assets/svg/logo/Jira.svg" alt="Jira" />
        <p class="ml-12 text-secondary font-medium">
          Jira
          是企業首選的的專案管理平台，從新創公司到大型企業皆適用，它可以協助團隊專案進度追蹤、問題回報與訊息溝通，促進成員間的合作並加速專案的執行效率，將文字視覺化，透過看板方式，一目瞭然各部門的工作狀態。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100%;
  z-index: 1;
  background: url("@/assets/svg/productBacklog/bg.svg");
}
.dot {
  @apply before:inline-block  before:mr-2 before:w-7 before:h-7 before:rounded-full before:border-4 before:border-white text-primary text-xl;
}
li + li {
  margin-top: 40px;
}
.dragItem {
  @apply border-2 rounded-[10px] border-yellow border-dashed bg-white cursor-move text-primary text-lg;
}
.dragItem:nth-child(1) {
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.dragItem:last-child {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.box-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
