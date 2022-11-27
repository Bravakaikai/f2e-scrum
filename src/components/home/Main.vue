<script setup>
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(["next"]);
</script>

<template>
  <Card
    class="center pt-20 pr-[72px] pb-[66px] pl-[198px] w-[760px] h-[360px] text-primary"
  >
    <template #default>
      <HeadShot class="cardHeadShot shadow" />
      <p>嗨，歡迎加入 FUFU 資訊，我是福福小精靈</p>
      <p>在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 !</p>
      <br />
      <p>首先，請跟福福一起簡單認識專有名詞吧！</p>
      <Button class="mt-11 w-1/3" title="好的！" @click="emit('next')" />
    </template>
  </Card>
</template>
