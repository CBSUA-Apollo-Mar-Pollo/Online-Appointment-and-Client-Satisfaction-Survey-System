import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import AppointmentPage from "../views/AppointmentPage.vue";
import AppointmentStatus1 from "../views/AppointmentStatus1.vue";
import AppointmentStatus2 from "../views/AppointmentStatus2.vue";
import SelfAssessment from "../views/SelfAssessment.vue";
import ReferenceNumber from "../views/ReferenceNumber.vue";
import SatisfactionSurvey from "../views/SatisfactionSurvey.vue";
import LoginPage from "../views/LoginPage.vue";
import DashboardHome from "../views/admin/pages/Home.vue";
import Dashboard from "../views/admin/components/Dashboard.vue";
import ManageAdmin from "../views/admin/components/ManageAdmin.vue";
import ManageEmployee from "../views/admin/components/ManageEmployee.vue";
import EmployeeHome from "../views/employee/pages/Home.vue";
import EmployeeDashboard from "../views/employee/components/Dashboard.vue";
import ManageAppointment from "../views/employee/components/ManageAppointment.vue";
import ManageSurvey from "../views/employee/components/ManageSurvey.vue";

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
  { path: '/Admin', redirect: { name: 'DashboardHome' } },
  { path: '/dashboard', component: Dashboard, children: [
      { path: '/Admin', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome }
    ]
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
  { path: '/Employee', redirect: { name: 'EmployeeHome' } },
  { path: '/EmployeeDashboard', component: EmployeeDashboard, children: [
      { path: '/Employee', redirect: { name: 'EmployeeHome' } },
      { path: 'home', name: 'EmployeeHome', component: EmployeeHome }
    ]
  },
  {
    path: "/ManageAppointment",
    name: "ManageAppointment",
    component: ManageAppointment,
  },
  {
    path: "/ManageSurvey",
    name: "ManageSurvey",
    component: ManageSurvey,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
