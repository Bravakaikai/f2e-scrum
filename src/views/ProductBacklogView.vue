<script setup>
import { inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import draggable from "vuedraggable";
import DraggableLayout from "@/layouts/DraggableLayout.vue";
import Button from "@/components/Button.vue";

const { state, setBacklog, nextStep } = inject("store");
const router = useRouter();
const backlog = ref([]);

onMounted(() => {
  backlog.value = state.backlog;
});

const done = () => {
  setBacklog(backlog.value);
  router.push({ name: "notify" });
  nextStep(4);
};
</script>

<template>
  <DraggableLayout
    type="productBacklog"
    :title="`通常 PO 在收到任務需求後，會使用 Jira 這套軟體做任務管理，\n現在，想請 ${state.name} 小試身手，依照需求優先度調整下方清單中的待辦順序。`"
  >
    <template #default>
      <div
        class="relative py-[60px] flex-center border-b-2 border-solid border-secondary box-shadow"
      >
        <div class="flex flex-col justify-between">
          <p class="dot before:bg-warn">優先度高</p>
          <img
            src="@/assets/svg/productBacklog/arrow.svg"
            alt="Arrow"
            class="h-[400px]"
          />
          <p class="dot before:bg-[#7AB68F]">優先度低</p>
        </div>
        <draggable v-model="backlog" group="backlog" item-key="id" class="mx-5">
          <template #item="{ element }">
            <li class="relative flex h-[56px]">
              <span class="dragItem px-7 py-3 cursor-move">
                {{ element.title }}
              </span>
              <img
                src="@/assets/svg/productBacklog/bar.svg"
                alt="icon"
                class="dragItem ml-[-1px] p-2 cursor-move"
              />
            </li>
          </template>
        </draggable>
        <Button
          class="mt-auto ml-10 w-1/6 max-w-[220px]"
          title="排好了"
          @click="done"
        />
      </div>
      <div class="mt-10 mx-auto flex justify-center w-2/3">
        <img src="@/assets/svg/logo/Jira.svg" alt="Jira" />
        <p class="ml-12 text-secondary font-medium">
          Jira
          是企業首選的的專案管理平台，從新創公司到大型企業皆適用，它可以協助團隊專案進度追蹤、問題回報與訊息溝通，促進成員間的合作並加速專案的執行效率，將文字視覺化，透過看板方式，一目瞭然各部門的工作狀態。
        </p>
      </div>
    </template>
  </DraggableLayout>
</template>

<style lang="scss" scoped>
.dot {
  @apply before:inline-block  before:mr-2 before:w-7 before:h-7 before:rounded-full before:border-4 before:border-white text-primary text-xl;
}
li + li {
  margin-top: 40px;
}
.box-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
