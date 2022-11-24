<script setup>
import { ref, inject } from "vue";
import { roleList, roleRef } from "@/assets/data/roleInfo";
import Button from "@/components/Button.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const { state } = inject("store");
const swiperRef = ref();
const goNext = () => {};
const introList = [
  {
    title: "產品負責人",
    subTitle: "PO，Product Owner",
    amount: 1,
    desc: "和SM一起排列「產品待辦清單Product Backlog」，並釐清產品需求及願景。\n\n有權中斷或停止開發週期中的「衝刺 Sprint 」。",
    style: {
      "--color": "#9c7548",
    },
  },
  {
    title: "( 我沒有中文翻譯 )",
    subTitle: "SM，Scrum Master",
    amount: 1,
    desc: "和 PO 一起尋求最佳「產品待辦清單 Product Backlog 」管理方式 找出能有效管理產品待辦列表的技巧。\n\n確保團隊中成員都充分了解 Scrum 並正確的實行。",
    style: {
      "--color": "#478AAF",
    },
  },
  {
    title: "開發團隊",
    subTitle: "DT，Development Team",
    amount: 6,
    desc: "在PO訂下的產品優先順序下，決定領取多少點數並實作出產品，所有成員的頭銜均為產品開發者，不管他們做什麼工作，除此之外沒有任何頭銜，此規定沒有例外。",
    style: {
      "--color": "#7AB68F",
    },
  },
];
</script>

<template>
  <div class="bg">
    <p class="text-center text-primary font-bold">
      進村的第一步，福福要先帶 {{ state.name }} 來拜碼頭<br />
      認錯職務可就是犯了大忌啦
    </p>

    <swiper
      ref="swiperRef"
      :grabCursor="true"
      :slidesPerView="3"
      :centeredSlides="true"
      :spaceBetween="50"
      :navigation="true"
      :modules="[Navigation]"
    >
      <swiper-slide
        v-for="(item, index) in roleList"
        :key="index"
        class="relative"
      >
        <div
          class="card border-8 border-solid rounded-[40px] w-[448]px] h-[600px] overflow-hidden"
          :style="introList[index].style"
        >
          <div
            class="amount absolute top-9 translate-x-[-50%] p-3 border-8 border-solid bg-white rounded-[50px] text-primary font-bold"
            :style="introList[index].style"
          >
            成員數量 x{{ introList[index].amount }}
          </div>
          <div class="absolute bottom-10 text-white">
            <p class="pl-9 font-bold text-2xl">{{ introList[index].title }}</p>
            <p
              class="border-b border-solid border-white px-9 pb-4 font-bold text-[28px]"
            >
              {{ introList[index].subTitle }}
            </p>
            <p class="px-9 py-4">{{ introList[index].desc }}</p>
          </div>
          <iframe
            :src="roleRef[item]"
            frameborder="0"
            width="180%"
            height="180%"
            class="cursor-pointer"
          />
        </div>
      </swiper-slide>
    </swiper>
    <Button
      class="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/4 z-10"
      title="下面一位"
      @click="goNext()"
    />
  </div>
</template>

<style lang="scss" scoped>
.card,
.amount {
  border-color: var(--color);
}
</style>

<style lang="scss">
.swiper-button-next::after,
.swiper-button-prev::after {
  color: white;
}
</style>
