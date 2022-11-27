<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import Layout from "@/layouts/HomeLayout.vue";
import Card from "@/components/Card.vue";
import HeadShot from "@/components/HeadShot.vue";
import Button from "@/components/Button.vue";

const { state, reset } = inject("store");
const router = useRouter();
const goHome = () => {
  router.replace({ name: "home" });
  reset();
};
</script>

<template>
  <Layout>
    <template #default>
      <Card
        class="center w-[760px] h-[480px] text-center text-lg text-secondary leading-9 flex flex-col justify-center animate__animated animate__fadeInDown"
      >
        <template #default>
          <HeadShot class="mx-auto shadow" :role-type="state.role" />
          <p class="mt-6">恭喜 {{ state.name }} 通過 Scrum 新手村測驗</p>
          <p>ฅ •ﻌ• ฅ</p>
          <p>歡迎你加入福福資訊開發 A 組</p>
          <p>
            中華民國 {{ new Date().getFullYear() - 1911 }} 年
            {{ new Date().getMonth() + 1 }} 月 {{ new Date().getDate() }} 日
          </p>
          <img
            src="@/assets/svg/end/tool.svg"
            alt="Confluence"
            class="absolute top-0 right-[-20px] translate-y-[-70%]"
          />
          <img
            src="@/assets/svg/end/achievement.svg"
            alt="achievement"
            class="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]"
          />
          <img
            src="@/assets/svg/end/achievement2.svg"
            alt="achievement"
            class="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]"
          />
          <Button
            class="inline-block px-12 absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]"
            title="回首頁"
            @click="goHome"
          />
        </template>
      </Card>
    </template>
  </Layout>
</template>
