import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import AppointmentPage from "../views/AppointmentPage.vue";
import AppointmentStatus from "../views/AppointmentStatus.vue";
import StatusPage from "../views/StatusPage.vue";
import SelfAssessment from "../views/SelfAssessment.vue";
import ReferenceNumber from "../views/ReferenceNumber.vue";
import SatisfactionSurvey from "../views/SatisfactionSurvey.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/AppointmentForm",
    name: "AppointmentPage",
    component: AppointmentPage,
  },
  {
    path: "/AppointmentStatus",
    name: "AppointmentStatus",
    component: AppointmentStatus,
  },
  {
    path: "/CheckStatus",
    name: "StatusPage",
    component: StatusPage,
  },
  {
    path: "/SurveyForm",
    name: "SatisfactionSurvey",
    component: SatisfactionSurvey,
  },
  {
    path: "/AssessmentForm",
    name: "SelfAssessment",
    component: SelfAssessment,
  },
  {
    path: "/ReferenceNumber",
    name: "ReferenceNumber",
    component: ReferenceNumber,
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
