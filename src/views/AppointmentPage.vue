<template>
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
                  <p>Reason for the Visit*</p>
                  <select class="form-select" v-model="reasonOfVisit">
                    <option selected>Select Reason/s*</option>
                    <option value="Reason 1">Reason 1 - Division</option>
                    <option value="Reason 2">Reason 2 - Division</option>
                    <option value="Reason 3">Reason 3 - Division</option>
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
                      <!-- <p>
                        <input
                          type="submit"
                          value="Upload Files"
                          class="btn btn-lg btn-primary"
                        />
                      </p> -->
                    </form>
                  </div>
                  <div class="col-md-4"></div>
                </div>

                <div class="col-12">
                  <p>Comment/s*</p>
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    v-model="comments"
                  ></textarea>
                </div>
                <div class="text-center mt-5">
                  <a
                    class="col-8 btn btn-primary"
                    href="/AssessmentForm"
                    role="button"
                    type="submit"
                  >
                    Next </a
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
  .AppointmentPage {
    padding: 0;
  }
  .app-con {
    margin-top: 1rem !important;
  }
}
</style>

<script>
import { ref } from "vue";
import { test } from "@/parse/test";
import Parse from "parse";

export default {
  setup() {
    const fName = ref("");
    const lName = ref("");
    const emailAdd = ref("");
    const contactNum = ref("");
    const AffliationOfClient = ref("");
    const reasonOfVisit = ref("");
    const date = ref("");
    const time = ref("");
    const comments = ref("");

    const onSubmit = () => {
      test
        .save({
          fName: fName.value,
          lName: lName.value,
          emailAdd: emailAdd.value,
          contactNum: contactNum.value,
          AffliationOfClient: AffliationOfClient.value,
          reasonOfVisit: reasonOfVisit.value,
          date: date.value,
          time: time.value,
          comments: comments.value,
        })
        .then(
          function (data) {
            console.log(data);
          }.bind(this),
          (error) => {
            console.log(error);
          }
        );
      console.log({
        fName: fName.value,
        lName: lName.value,
        emailAdd: emailAdd.value,
        contactNum: contactNum.value,
        AffliationOfClient: AffliationOfClient.value,
        reasonOfVisit: reasonOfVisit.value,
        date: date.value,
        time: time.value,
        comments: comments.value,
      });
      fName.value = "";
      lName.value = "";
      emailAdd.value = "";
      contactNum.value = "";
      AffliationOfClient.value = "";
      reasonOfVisit.value = "";
      date.value = "";
      time.value = "";
      comments.value = "";
    };

    const Data = Parse.Object.extend("test");
    const query = new Parse.Query(Data);
    query.find().then(
      (data) => {
        console.log(data.map((e) => e.attributes));
      },
      (error) => {
        console.log(error);
      }
    );

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
