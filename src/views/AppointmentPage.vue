<template>
  <NavBar />
  <section id="AppointmentForm" class="AppointmentPage p-0">
    <div class="container" data-aos="fade-up">
      <div class="container app-con">
        <div class="row">
          <div class="col-md-6 offset-md-3 border p-4 shadow">
            <div class="col-12">
              <div class="section-title pb-0">
                <h2>Appointment form</h2>
              </div>
              <p class="instruction pb-3">
                Instructions: To set an appointment at any CHED Office, kindly
                accomplish the required fields in the form below. Select a CHED
                Office you would like to set an appointment with and indicate
                your preferred schedule as well as your reason for visit. Click
                on "Request Appointment" to submit your response. Approval of
                requested appointments is subject to the availability of the
                selected office.
              </p>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="row g-3">
                <div class="col-md-6">
                  <p>First Name*</p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Juan"
                    v-model="fName"
                  />
                </div>
                <div class="col-md-6">
                  <p>Last Name*</p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Dela Cruz"
                    v-model="lName"
                  />
                </div>
                <div class="col-md-6">
                  <p>Email Address*</p>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="username@domain.com"
                    v-model="emailAdd"
                  />
                </div>
                <div class="col-md-6">
                  <p>Contact Number*</p>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="09XXXXXXXXX"
                    v-model="contactNum"
                  />
                </div>

                <div class="col-12">
                  <p>Affliation of Client (School/Company)*</p>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder=""
                    v-model="AffliationOfClient"
                  />
                </div>

                <div class="col-md-12">
                  <p>Select Office*</p>
                  <select class="form-select" 
                    v-model="selectOffice"  
                    type="tel"
                    placeholder="09XXXXXXXXX">
                    <option selected>Local Graduate Scholarship Office</option>
                    <option selected>Office of Institutional Quality Assurance and Governance (OICAG)</option>
                    <option selected>Office of Student Development and Services (OSDS)</option>
                    <option selected>Regional Office V</option>
                  </select>
                </div>

                  <!-- Local Graduate Scholarship Office-->
                <div class="col-md-12" v-if="selectOffice == 'Local Graduate Scholarship Office' || selectOffice == ''">
                  <p>Reason for the Visit*</p>
                  <select class="form-select" v-model="reasonOfVisit">
                    <optgroup selected label="For Scholars">
                      <option value="[For Scholars] Follow-up on Financial Privileges">[For Scholars] Follow-up on Financial Privileges</option>
                      <option value="[For Scholars] Submission of Documents for Living Allowances or Special Requests">[For Scholars] Submission of Documents for Living Allowances or Special Requests</option>
                     </optgroup>
                     <optgroup selected label="For DHEIs">
                      <option value="[For DHEIs] Submission of Documents for Tuition and Fees">[For DHEIs] Submission of Documents for Tuition and Fees</option>
                      <option value="[For DHEIs] Follow-up on Settlement of Tuition and Fees">[For DHEIs] Follow-up on Settlement of Tuition and Fees</option>
                      </optgroup>
                  </select>
                </div>

                 <!-- Office of Institutional Quality Assurance and Governance (OICAG) -->
                <div class="col-md-12" v-if="selectOffice == 'Office of Institutional Quality Assurance and Governance (OICAG)'">
                  <p>Reason for the Visit*</p>
                  <select class="form-select" v-model="reasonOfVisit">
                      <option value="Consultation">Consultation</option>
                      <option value="Submission of Documents">Submission of Documents</option>
                      <option value="Meeting">Meeting</option>
                  </select>
                </div>

                 <!-- Office of Student Development and Services (OSDS)-->
                <div class="col-md-12" v-if="selectOffice == 'Office of Student Development and Services (OSDS)'">
                  <p>Reason for the Visit*</p>
                  <select class="form-select" v-model="reasonOfVisit">
                      <option value="CAV">CAV</option>
                      <option value="CAV">CAV</option>
                      <option value="CED">CED</option>
                      <option value="FS Indorsement">FS Indorsement</option>
                      <option value="SIAP">SIAP</option>
                  </select>
                </div>

              
                  <!-- Regional Office V-->
                <div class="col-md-12" v-if="selectOffice == 'Regional Office V'">
                  <p>Reason for the Visit*</p>
                  <select class="form-select" v-model="reasonOfVisit">
                      <option value="Administrative - CAV Application (Local)">Administrative - CAV Application (Local) (Reminders: 5 Max. Applications per Slot; Please indicate the number of applications under "Remarks")</option>
                      <option value="Administrative - CAV Application (Abroad)">Administrative - CAV Application (Abroad) (Reminders: 5 Max. Applications per Slot; Please indicate the number of applications under "Remarks")</option>
                      <option value="Administrative - SO Application">Administrative - SO Application (Reminders: 10 Max. Applications per Slot; Please indicate the number of applications under "Remarks")</option>
                      <option value="Administrative - SO Releasing">Administrative - SO Releasing (Reminders: 10 Max. Applications per Slot; Please indicate the number of applications under "Remarks")</option>
                      <option value="Appointment with the Regional Director">Appointment with the Regional Director</option>
                      <option value="Technical - Concerns related to Accreditation of Health Facilities Utilized for Internship">Technical - Concerns related to Accreditation of Health Facilities Utilized for Internship</option>
                      <option value="Technical - Concerns related to Amalgamation">Technical - Concerns related to Amalgamation</option>
                      <option value="Technical - Concerns related to Agricultural, Forestry, Fisheries, and Vet Med. Education Programs">Technical - Concerns related to Agricultural, Forestry, Fisheries, and Vet Med. Education Programs</option>
                      <option value="Technical - Concerns related to Business and Related Education Programs">Technical - Concerns related to Business and Related Education Programs</option>
                      <option value="Technical - Concerns related to Autonomous and Deregulated Statues">Technical - Concerns related to Autonomous and Deregulated Statues</option>
                      <option value="Technical - Concerns related to Criminology Education Programs">Technical - Concerns related to Criminology Education Programs</option>
                      <option value="Technical - Concerns related to Engineering Education Programs">Technical - Concerns related to Engineering Education Programs</option>
                      <option value="Technical - Concerns related to Environmental Science Education Programs">Technical - Concerns related to Environmental Science Education Programs</option>
                      <option value="Technical - Concerns related to Fine and Applied Arts Education Programs">Technical - Concerns related to Fine and Applied Arts Education Programs</option>
                      <option value="Technical - Concerns related to HEMIS">Technical - Concerns related to HEMIS</option>
                      <option value="Technical - Concerns related to Home Economics Education Programs">Technical - Concerns related to Home Economics Education Programs</option>
                      <option value="Technical - Concerns related to Humanities Education Programs">Technical - Concerns related to Humanities Education Programs</option>
                      <option value="Technical - Concerns related to Information Technology Education Programs">Technical - Concerns related to Information Technology Education Programs</option>
                      <option value="Technical - Concerns related to K-12 Transition Programs">Technical - Concerns related to K-12 Transition Programs</option>
                      <option value="Technical - Concerns related to Law and Jurisprudence Education Programs">Technical - Concerns related to Law and Jurisprudence Education Programs</option>
                      <option value="Technical - Concerns related to Limited Face-to-Face Classes for Selected Health Programs">Technical - Concerns related to Limited Face-to-Face Classes for Selected Health Programs</option>
                      <option value="Technical - Concerns related to Local Universities and Colleges (LUCs)">Technical - Concerns related to Local Universities and Colleges (LUCs)</option>
                      <option value="Technical - Concerns related to Maritime Education Programs">Technical - Concerns related to Maritime Education Programs</option>
                      <option value="Technical - Concerns related to Mass Communication and Documentation Education Programs">Technical - Concerns related to Mass Communication and Documentation Education Programs</option>
                      <option value="Technical - Concerns related to Mathematics Education Programs">Technical - Concerns related to Mathematics Education Programs</option>
                      <option value="Technical - Concerns related to Medical and Allied Programs">Technical - Concerns related to Medical and Allied Programs</option>
                      <option value="Technical - Concerns related to National Service Training Program (NSTP)">Technical - Concerns related to National Service Training Program (NSTP)</option>
                      <option value="Technical - Concerns related to Natural Science Education Programs">Technical - Concerns related to Natural Science Education Programs</option>
                      <option value="Technical - Concerns related to Religion and Theology Education Programs">Technical - Concerns related to Religion and Theology Education Programs</option>
                      <option value="Technical - Concerns related to Service Trades Education Programs">Technical - Concerns related to Service Trades Education Programs</option>
                      <option value="Technical - Concerns related to Social and Behavioral Sciences Education Programs">Technical - Concerns related to Social and Behavioral Sciences Education Programs</option>
                      <option value="Technical - Concerns related to Social Work Education Programs">Technical - Concerns related to Social Work Education Programs</option>
                      <option value="Technical - Concerns related to State Universities and Colleges (SUCs)">Technical - Concerns related to State Universities and Colleges (SUCs)</option>
                      <option value="Technical - Concerns related to Student Financial Assistance Programs (StuFAPs)">Technical - Concerns related to Student Financial Assistance Programs (StuFAPs)</option>
                      <option value="Technical - Concerns related to Teacher Education Programs">Technical - Concerns related to Teacher Education Programs</option>
                      <option value="Technical - Concerns related to Trade, Craft and Industrial Education Programs">Technical - Concerns related to Trade, Craft and Industrial Education Programs</option>
                      <option value="Technical - Concerns related to Tuition Fees">Technical - Concerns related to Tuition Fees</option>
                      <option value="Technical - Concerns related to Unified Student Financial Assistance System for Tertiary Education (UniFAST)">Technical - Concerns related to Unified Student Financial Assistance System for Tertiary Education (UniFAST)</option>
                      <option value="Administrative - Submit F19 and Enrollment list documents">Administrative - Submit F19 and Enrollment list documents</option>
                      <option value="Administrative - Claim CAV documents">Administrative - Claim CAV documents</option>
                      <option value="Administrative - Correction of name deficiency reply/application">Administrative - Correction of name deficiency reply/application</option>
                      <option value="Administrative - Compliance to CAV deficiency">Administrative - Compliance to CAV deficiency</option>       
                  </select>
                </div>

                <div class="col-md-6">
                  <p>Chooose Date*</p>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Enter Date"
                    v-model="date"
                  />
                </div>
                <div class="col-md-6">
                  <p>Choose Time*</p>
                  <input
                    type="time"
                    class="form-control"
                    placeholder="Enter Email"
                    v-model="time"
                  />
                </div>

                <div class="container">
                  <div class="col-md-4"></div>
                  <div class="col-md-12">
                    <form method="post" enctype="multipart/form-data">
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple="multiple"
                      />
                    </form>
                  </div>
                  <div class="col-md-4"></div>
                </div>

                <div class="col-12">
                  <p>Reason for Appointment:</p>
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    v-model="comments"
                  ></textarea>
                </div>
                <div class="text-center mt-5">
                  <button
                    class="col-8 btn btn-primary"
                    href="/AssessmentForm"
                    role="button"
                    type="submit"
                  >
                    Next</button
                  ><br />
                  <a
                    class="col-8 btn btn-basic mt-2"
                    role="button"
                    type="submit"
                    @click="showAlert"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
import { test } from "@/parse/test";
import Parse from "parse";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
  },
  
  setup() {
    const router = useRouter();

    const fName = ref("");
    const lName = ref("");
    const emailAdd = ref("");
    const contactNum = ref("");
    const AffliationOfClient = ref("");
    const reasonOfVisit = ref("");
    const date = ref("");
    const time = ref("");
    const comments = ref("");
    const selectOffice = ref("");

    const Referencenum = Math.random().toString().substr(2, 8);
    const year = new Date().getUTCFullYear();
    const referenceNum = Referencenum + `-${year}`;

    const onSubmit = () => {
      const data = ref({
        fName: fName.value,
        lName: lName.value,
        emailAdd: emailAdd.value,
        contactNum: contactNum.value,
        AffliationOfClient: AffliationOfClient.value,
        reasonOfVisit: reasonOfVisit.value,
        date: date.value,
        time: time.value,
        comments: comments.value,
        selectOffice : selectOffice.value,
        referenceNum: referenceNum
      });
      console.log(data._rawValue);
      localStorage.setItem("storedData", JSON.stringify(data._rawValue));
      router.push({ name: "SelfAssessment" });
    };
    return {
      onSubmit,
      fName,
      lName,
      emailAdd,
      contactNum,
      AffliationOfClient,
      reasonOfVisit,
      date,
      time,
      comments,
      selectOffice
    };
  },

  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Canceled!",
              "Your appointment has been canceled.",
              "success"
            );
            window.location = "/";
          }
        });
    },
  },
};
</script>

<style scoped>
.app-con {
  margin-top: 3rem !important;
}

.section-title h2 {
  padding: 10px 0 0 0px;
  color: #008aff;
  text-align: left;
}

.instruction {
  color: #626262;
  text-align: justify;
}

.btn-primary {
  background-color: #008aff;
}

.btn-basic {
  background-color: #f8f9fa;
}

@media only screen and (max-width: 600px) {
  .container {
    margin-top: 30px;
  }
  .AppointmentPage {
    padding: 0;
  }
  .app-con {
    margin-top: 1rem !important;
  }
}
</style>

