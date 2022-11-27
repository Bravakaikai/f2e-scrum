import { reactive } from "vue";

const state = reactive({
  step: 0,
  role: "",
  name: "",
  backlog: [
    {
      id: 1,
      title: "會員系統 (登入、註冊、權限管理)",
      point: null,
    },
    {
      id: 2,
      title: "前台職缺列表 (職缺詳細內容、點選可發送應徵意願)",
      point: null,
    },
    {
      id: 3,
      title: "後台職缺管理功能 (資訊上架、下架、顯示應徵者資料)",
      point: null,
    },
    {
      id: 4,
      title: "應徵者的線上履歷編輯器",
      point: null,
    },
  ],
});

const setRole = (val) => {
  state.role = val;
  sessionStorage.setItem("role", val);
};

const setName = (val) => {
  state.name = val;
  sessionStorage.setItem("name", val);
};

const setBacklog = (val) => {
  state.backlog = val;
  sessionStorage.setItem("backlog", JSON.stringify(val));
};

const reset = () => {
  state.step = 0;
  state.backlog = [
    {
      id: 1,
      title: "會員系統 (登入、註冊、權限管理)",
      point: null,
    },
    {
      id: 2,
      title: "前台職缺列表 (職缺詳細內容、點選可發送應徵意願)",
      point: null,
    },
    {
      id: 3,
      title: "後台職缺管理功能 (資訊上架、下架、顯示應徵者資料)",
      point: null,
    },
    {
      id: 4,
      title: "應徵者的線上履歷編輯器",
      point: null,
    },
  ];
  sessionStorage.removeItem("backlog");
  window.scrollTo(0, 0);
};

const nextStep = (val) => {
  if (state.step <= 10) {
    state.step = val;
    sessionStorage.setItem("step", state.step);
  }
};

export default {
  state,
  setRole,
  setName,
  setBacklog,
  nextStep,
  reset,
};
