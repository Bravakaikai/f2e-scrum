<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import { roleList } from "@/assets/data/roleInfo";
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const { state, setRole, setName, nextStep } = inject("store");
const router = useRouter();

const name = ref(null);
onMounted(() => {
  name.value = state.name;
});

const goScrum = () => {
  if (!state.role) {
    alert("請選擇角色");
    return;
  }
  if (!name.value) {
    alert("請輸入名字");
    return;
  }
  setName(name.value);

  router.push({ name: "role" });
  nextStep(2);
};
</script>

<template>
  <Card
    class="center px-[100px] pt-12 pb-10 w-[1000px] h-[520px] text-center text-primary"
  >
    <template #default>
      <p>
        請選擇你喜歡的角色，並且告訴福福你的名字哦 ฅ •ﻌ• ฅ
        <br />
        完成後請按下「進村」按鈕，就可成功進入Scrum 新手村囉！
      </p>
      <div class="my-12 flex justify-between cursor-pointer">
        <HeadShot
          v-for="(item, index) in roleList"
          :key="index"
          :role-type="item"
          class="w-[200px] h-[200px]"
          :class="state.role == item ? 'focus' : 'opacity-25'"
          clickable
          @click="setRole(item)"
        />
      </div>
      <form>
        <label for="name" class="block">我的名字 : </label>
        <input
          v-model="name"
          id="name"
          type="text"
          class="border-b border-solid border-primary bg-transparent outline-0"
        />
      </form>
      <Button
        class="absolute w-1/4 bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]"
        title="進村！"
        @click="goScrum"
      />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.headShot + .headShot {
  margin-left: 72px;
}
</style>
