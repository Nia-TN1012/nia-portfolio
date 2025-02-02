import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import WorksPage from "../pages/WorksPage.vue";
import ArtifactsPage from "../pages/ArtifactsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsPage,
  },
  {
    path: "/works",
    name: "works",
    component: WorksPage,
  },
  {
    path: "/artifacts",
    name: "artifacts",
    component: ArtifactsPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
