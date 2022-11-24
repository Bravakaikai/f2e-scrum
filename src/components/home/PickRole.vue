<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const { state } = inject("store");
const router = useRouter();

const roleList = ["bear", "frog", "rabbit"];
const name = ref(null);

const pickRole = () => {};
const goScrum = () => {
  if (!name.value) {
    alert("請輸入名字");
    return;
  }
  state.name = name;
  router.push({ name: "role" });
};
</script>

<template>
  <Card
    class="absolute top-[45%] left-1/2 translate-x-[-50%] translate-y-[-50%] px-[150px] pt-12 pb-20 text-center text-primary"
  >
    <template #default>
      <p>
        在這之前，我們一起變裝進入村里一起玩吧 !
        <br />
        請選擇你喜歡的角色，並且告訴福福你的名字哦 ฅ •ﻌ• ฅ
      </p>
      <div class="flex my-9">
        <HeadShot
          v-for="(item, index) in roleList"
          :key="index"
          :roleType="item"
          class="w-[150px] h-[150px]"
          clickable
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
        @click="goScrum()"
      />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.headShot + .headShot {
  margin-left: 72px;
}
</style>
