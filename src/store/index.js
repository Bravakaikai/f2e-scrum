import { reactive } from 'vue'

const state = reactive({
  step: 1,
  role: '',
  name: '',
})

export default {
  state,
}