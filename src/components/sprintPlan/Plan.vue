<script setup>
import { inject, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Block from "@/components/sprintPlan/Block.vue";
import draggable from "vuedraggable";
import Button from "@/components/Button.vue";

const { state, nextStep } = inject("store");
const router = useRouter();

const limit = 20;
const backlog = ref([]);
const sprintPlan = ref([]);

const pointValidate = () => {
  return currentPoints() <= limit;
};

const currentPoints = () => {
  if (sprintPlan.value) {
    const points = sprintPlan.value.map((item) => item.point);
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
      sum += points[i];
    }
    return sum;
  }
  return 0;
};

onMounted(() => {
  backlog.value = JSON.parse(JSON.stringify(state.backlog));
});

const done = () => {
  if (!sprintPlan.value.length) {
    alert("請挑選出這次短衝的清單任務");
    return;
  } else if (!pointValidate()) {
    alert("點數加總不可超過 20 點");
    return;
  }
  router.push({ name: "notify" });
  nextStep(7);
};
</script>

<template>
  <div class="mt-4 flex justify-between">
    <Block type="Product Backlog">
      <template #default>
        <div class="relative height">
          <img
            v-show="backlog.length === 0"
            src="@/assets/svg/icon/cross.svg"
            alt="icon"
            class="absolute top-0 right-0 bottom-0 left-0 m-auto"
          />
          <draggable
            :list="backlog"
            group="sprintPlan"
            item-key="id"
            class="dragBlock"
          >
            <template #item="{ element }">
              <li class="flex cursor-move">
                <span class="dragItem px-7 py-3">
                  {{ element.title }}
                </span>
                <div class="point">
                  {{ element.point }}
                </div>
              </li>
            </template>
          </draggable>
        </div>
      </template>
    </Block>
    <Block
      type="Sprint Planning"
      class="ml-10"
      :class="pointValidate() ? 'bg-white' : 'bg-[#ffbbbb]'"
    >
      <template #default>
        <div class="relative height">
          <img
            v-show="sprintPlan.length === 0"
            src="@/assets/svg/icon/cross.svg"
            alt="icon"
            class="absolute top-0 right-0 bottom-0 left-0 m-auto"
          />
          <draggable
            :list="sprintPlan"
            group="sprintPlan"
            item-key="id"
            class="dragBlock"
          >
            <template #item="{ element }">
              <li class="flex cursor-move">
                <span class="dragItem px-7 py-3"> {{ element.title }} </span>
                <div class="point">
                  {{ element.point }}
                </div>
              </li>
            </template>
          </draggable>
        </div>
        <p class="text-center text-secondary text-xl">
          <span
            v-show="sprintPlan.length && currentPoints() < limit / 2"
            class="hint"
          >
            可以再多安排一些任務呦～
            <br />
          </span>
          <span v-show="!pointValidate()" class="hint">
            哎呀呀！這樣超出負擔了啦！
            <br />
          </span>
          {{ limit }} 點 /
          <span :class="pointValidate() ? '' : 'text-warn'"
            >{{ currentPoints() }} 點</span
          >
          <br />
          <span v-show="!sprintPlan.length" class="hint">
            (請把估好點數的任務拖曳過來)
          </span>
        </p>
        <Button
          class="inline-block px-12 absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]"
          title="安排！"
          @click="done"
        />
      </template>
    </Block>
  </div>
</template>

<style lang="scss" scoped>
li + li {
  margin-top: 20px;
}
.height {
  height: 400px;
}
.hint {
  @apply text-base font-medium;
}
.dragBlock {
  @apply absolute w-full h-full flex flex-col justify-center;
}
.point {
  @apply border-2 border-white border-dashed rounded-r-[10px] bg-yellow px-5 text-white text-3xl flex justify-center items-center;
}
</style>
