<script setup>
import Card from "@/components/Card.vue";
defineProps({
  type: "Sprint Planning" | "Product Backlog",
});
</script>

<template>
  <Card class="relative pb-9 w-[552px] h-[560px] text-primary">
    <template #default>
      <div
        class="mt-[-4px] mx-[-4px] py-5 rounded-t-[60px] text-white text-center text-xl"
        :class="type == 'Sprint Planning' ? 'bg-primary' : 'bg-secondary'"
      >
        {{ type }}
      </div>
      <slot />
    </template>
  </Card>
</template>
