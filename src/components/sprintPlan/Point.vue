<script setup>
import { inject, ref, onMounted } from "vue";
import Button from "@/components/Button.vue";

const { state } = inject("store");
const points = [3, 5, 8, 13];
const backlog = ref([]);

const emit = defineEmits(["pointDone"]);
const done = () => {
  const pointList = backlog.value.map((item) => item.point);
  if (pointList.indexOf(null) > -1) alert("請完成點數估算");
  else emit("pointDone");
};

onMounted(() => {
  backlog.value = state.backlog;
});
</script>

<template>
  <div class="flex-center flex-col">
    <ul class="mt-7">
      <li v-for="(item, index) in backlog" :key="item.id" class="flex">
        <span class="dragItem px-7 py-3">
          {{ item.title }}
        </span>
        <div class="dragItem ml-[-1px] px-7">
          <select
            v-model="backlog[index].point"
            class="h-full rounded-[10px] cursor-pointer outline-none"
          >
            <option :value="null">點數</option>
            <option v-for="p in points" :key="p" :value="p">
              {{ p }}
            </option>
          </select>
        </div>
      </li>
    </ul>
    <Button
      class="inline-block mt-[60px] px-12"
      title="估完了！"
      @click="done"
    />
  </div>
</template>

<style lang="scss" scoped>
li + li {
  margin-top: 40px;
}
</style>
