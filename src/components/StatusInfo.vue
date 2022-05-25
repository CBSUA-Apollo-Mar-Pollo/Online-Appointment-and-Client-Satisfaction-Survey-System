<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header"></div>
      <div class="modal-body">
        <div class="row g-0">
          <div class="status pt-3">
            <table class="table table-borderless">
              <tbody>
                <!-- <tr>
                  <div class="page-wrapper">
                    <div class="circle-wrapper">
                      <div class="success circle"></div>
                      <div class="icon">
                        <i class="bi bi-check"></i>
                      </div>
                    </div>
                  </div>
                </tr> -->
                <tr>
                  <td>
                    <div class="d-flex flex-column text-center">
                      <span class="head d-block">Status of Appointment</span>
                      <span class="text-sky-600 text-3xl pb-1 font-extrabold"
                        >{{ appointmentStatus?.status }}</span
                      >
                      <hr />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="heading d-block"
                      ><i class="bi bi-person-fill"></i>{{ appointmentStatus?.fName + " " + appointmentStatus?.lName}}</span
                    >
                    <span class="subheadings d-block">{{ appointmentStatus?.contactNum }}</span>
                    <span class="subheadings d-block">{{ appointmentStatus?.emailAdd }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex flex-column">
                      <span class="heading d-block"
                        ><i class="bi bi-calendar-week-fill"></i>
                        Time/Date</span
                      >
                      <span class="subheadings">{{ appointmentStatus?.time + " , " + appointmentStatus?.date}}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex flex-column">
                      <span class="heading d-block"
                        ><i class="bi bi-card-heading"></i> Affliation of
                        Client</span
                      >
                      <span class="subheadings">{{ appointmentStatus?.AffliationOfClient }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex flex-column">
                      <span class="heading d-block"
                        ><i class="bi bi-card-heading"></i> Reason for the
                        Visit</span
                      >
                      <span class="subheadings">{{ appointmentStatus?.reasonOfVisit }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex flex-column">
                      <span class="heading d-block"
                        ><i class="bi bi-circle-fill"></i> Reason for
                        Appointment</span
                      >
                      <span class="subheadings"
                        >{{ appointmentStatus?.comments }}</span
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref , computed } from "vue";
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const appointmentStatus = ref(JSON.parse(localStorage.getItem("appointmentStatus")));
    console.log(appointmentStatus.fName)

    return {
      appointmentStatus: computed(() => store.state.status)
    }
  }
}

</script>

<style scoped>
.container {
  box-shadow: 0 2px 5px rgb(175, 175, 175);
}

.statustitle {
  font-size: 20px;
  font-weight: bold;
  color: #008000;
}

.bi {
  color: #008aff;
}

.close:focus {
  outline: 1px dotted #fff !important;
}

.modal-body {
  padding: 0rem !important;
  width: 800px;
}

.modal-title {
  color: #fff;
}

.modal-header {
  background: #008aff;
  color: #fff !important;
}

.head {
  color: #888888;
  font-weight: 500 !important;
}

.heading {
  font-weight: 500 !important;
  font-size: 15px;
}
span {
  margin: 10px 30px;
}

.subheadings {
  font-size: 14px;
  color: #888888;
  padding-left: 23px;
  font-weight: 500;
}

.dots {
  height: 5px;
  width: 5px;
  background-color: rgb(0, 165, 0);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  transform: translate(0%, -50%);
}

.circle-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  float: left;
  margin: 10px;
}

.icon .bi {
  position: absolute;
  font-size: 50px;
  transform: translate(0%, -80%);
  text-align: center;
  color: #00a500;
}

.circle {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 2.5px;
  background-clip: content-box;
  animation: spin 10s linear infinite;
}

.circle-wrapper:active .circle {
  animation: spin 2s linear infinite;
}

.success {
  background-color: transparent;
  border: 2.5px dashed #4bb543;
}

.error {
  background-color: #ca0b00;
  border: 2.5px dashed #ca0b00;
}

.warning {
  background-color: #f0d500;
  border: 2.5px dashed #f0d500;
}
@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}

.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .modal-body {
    width: 350px;
}
}
</style>
