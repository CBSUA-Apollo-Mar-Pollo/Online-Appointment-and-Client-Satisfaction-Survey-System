import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import AppointmentPage from "../views/AppointmentPage.vue";
import AppointmentStatus1 from "../views/AppointmentStatus1.vue";
import AppointmentStatus2 from "../views/AppointmentStatus2.vue";
import SelfAssessment from "../views/SelfAssessment.vue";
import ReferenceNumber from "../views/ReferenceNumber.vue";
import SatisfactionSurvey from "../views/SatisfactionSurvey.vue";
import LoginPage from "../views/LoginPage.vue";
import Admin from "../views/admin/Dashboard.vue";
import ManageAdmin from "../views/admin/ManageAdmin.vue";
import ManageEmployee from "../views/admin/ManageEmployee.vue";
import Employee from "../views/Employee/Dashboard.vue";
import ManageAppointment from "../views/Employee/ManageAppointment.vue";
import ManageSurvey from "../views/Employee/ManageSurvey.vue";
import ManageAssessment from "../views/Employee/ManageAssessment.vue";

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
    name: "AppointmentStatus1",
    component: AppointmentStatus1,
  },
  {
    path: "/CheckStatus",
    name: "AppointmentStatus2",
    component: AppointmentStatus2,
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
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/ManageAdmin",
    name: "ManageAdmin",
    component: ManageAdmin,
  },
  {
    path: "/ManageEmployee",
    name: "ManageEmployee",
    component: ManageEmployee,
  },
  {
    path: "/Employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: '/ManageAppointment',
    name: 'ManageAppointment',
    component: ManageAppointment,
  },
  {
    path: '/ManageSurvey',
    name: 'ManageSurvey',
    component: ManageSurvey,
  },
  {
    path: '/ManageAssessment',
    name: 'ManageAssessment',
    component: ManageAssessment
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
