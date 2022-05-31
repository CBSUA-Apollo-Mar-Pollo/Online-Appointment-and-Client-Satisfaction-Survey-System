import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import AppointmentPage from "../views/AppointmentPage.vue";
import AppointmentStatus1 from "../views/AppointmentStatus1.vue";
import AppointmentStatus2 from "../views/AppointmentStatus2.vue";
import SelfAssessment from "../views/SelfAssessment.vue";
import ReferenceNumber from "../views/ReferenceNumber.vue";
import SatisfactionSurvey from "../views/SatisfactionSurvey.vue";
import LoginPage from "../views/LoginPage.vue";
import Admin from "../views/Admin/Dashboard.vue";
import ManageAdmin from "../views/Admin/ManageAdmin.vue";
import ManageEmployee from "../views/Admin/ManageEmployee.vue";
import Employee from "../views/Employee/Dashboard.vue";
import ManageAppointmentPending from "../views/Employee/ManageAppointmentPending.vue";
import ManageAppointmentApproved from "../views/Employee/ManageAppointmentApproved.vue";
import ManageAppointmentCompleted from "../views/Employee/ManageAppointmentCompleted.vue";
import ManageAppointmentRejected from "../views/Employee/ManageAppointmentRejected.vue";
import ManageAppointmentCanceled from "../views/Employee/ManageAppointmentCanceled.vue";
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
    path: '/ManageAppointmentPending',
    name: 'ManageAppointmentPending',
    component: ManageAppointmentPending,
  },
  {
    path: '/ManageAppointmentApprove',
    name: 'ManageAppointmentApprove',
    component: ManageAppointmentApproved,
  },
  {
    path: '/ManageAppointmentCompleted',
    name: 'ManageAppointmentCompleted',
    component: ManageAppointmentCompleted,
  },
  {
    path: '/ManageAppointmentRejected',
    name: 'ManageAppointmentRejected',
    component: ManageAppointmentRejected,
  },
  {
    path: '/ManageAppointmentCanceled',
    name: 'ManageAppointmentCanceled',
    component: ManageAppointmentCanceled,
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
