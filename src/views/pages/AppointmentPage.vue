/* eslint-disable */
<template>
  <section id="AppointmentPage" class="AppointmentPage">
    <div class="container" data-aos="fade-up">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div class="col-12">
              <h3 class="fw-normal text-secondary fs-4 text-uppercase mb-4">
                Appointment form
              </h3>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="row g-3">
                <div class="col-md-6">
                  <p>First Name*</p>
                  <input type="text" class="form-control" placeholder="Juan" v-model="fName"/>
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
                  <input type="tel" class="form-control" placeholder="" v-model="AffliationOfClient"/>
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
                <div class="col-12 mt-5">
                  <button
                    style="background-color: #1ea0df"
                    type="submit"
                    class="btn btn-primary float-end"
                  >
                    Request My Appointment
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary float-end me-2 loading"
                  >
                    Cancel
                  </button>
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
import { ref } from 'vue'
import { test } from '@/parse/test'
export default {
  setup() {

    const fName = ref('')
    const lName = ref('')
    const emailAdd = ref('')
    const contactNum = ref('')
    const AffliationOfClient = ref('')
    const reasonOfVisit = ref('')
    const date = ref('')
    const time = ref('')
    const comments = ref('')

    const onSubmit = () => {
       test.save({
          fName : fName.value,
          lName : lName.value,
          emailAdd : emailAdd.value,
          contactNum : contactNum.value,
          AffliationOfClient : AffliationOfClient.value,
          reasonOfVisit : reasonOfVisit.value,
          date : date.value,
          time : time.value,
          comments : comments.value,
        }).then(function(data) {
         console.log(data)
       }.bind(this),(error) => {
         console.log(error)
       })  
      console.log({
        fName : fName.value,
        lName : lName.value,
        emailAdd : emailAdd.value,
        contactNum : contactNum.value,
        AffliationOfClient : AffliationOfClient.value,
        reasonOfVisit : reasonOfVisit.value,
        date : date.value,
        time : time.value,
        comments : comments.value,
      })
      fName.value = ''
      lName.value = ''
      emailAdd.value = ''
      contactNum.value = ''
      AffliationOfClient.value = ''
      reasonOfVisit.value = ''
      date.value = ''
      time.value = ''
      comments.value = ''
    }

    return { 
      onSubmit,
      fName , lName ,
      emailAdd , contactNum ,
      AffliationOfClient , reasonOfVisit ,
      date , time , comments
    }
  }
};
</script>
