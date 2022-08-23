import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/homePage.vue";
import AnswerPage from "@/views/answerPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    component: HomePage
  },
  {
    path: `/answer_page`,
    component: AnswerPage
  }

]

const router = new VueRouter({
  routes
})

export default router
