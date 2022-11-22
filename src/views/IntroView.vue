<script setup>
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <Card class="text-primary py-10 pr-[60px] pl-[172px]">
    <template #default>
      <HeadShot class="absolute top-0 left-0 translate-x-[-25%]" />
      <div class="flex items-center">
        <p>
          福福貼心幫你排序好專有名詞了，等等應該會很常看到唷！<br />若沒問題，請接受此任務，成功通過
          Scrum 新手村的挑戰吧！
        </p>
        <Button class="ml-6 w-[220px]" title="接受挑戰" />
      </div>
    </template>
  </Card>
</template>
