<template>
  <section id="AppointmentForm" class="AppointmentPage">
    <div class="container" data-aos="fade-up">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div class="col-12">
              <h3 class="fw-normal text-secondary fs-4 text-uppercase mb-4">
                Appointment form
              </h3>
            </div>
            <form action="">
              <div class="row g-3">
                <div class="col-md-6">
                  <p>First Name*</p>
                  <input type="text" class="form-control" placeholder="Juan" />
                </div>
                <div class="col-md-6">
                  <p>Last Name*</p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Dela Cruz"
                  />
                </div>
                <div class="col-md-6">
                  <p>Email Address*</p>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="username@domain.com"
                  />
                </div>
                <div class="col-md-6">
                  <p>Contact Number*</p>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div class="col-12">
                  <p>Affliation of Client (School/Company)*</p>
                  <input type="tel" class="form-control" placeholder="" />
                </div>

                <div class="col-md-12">
                  <p>Reason for the Visit*</p>
                  <select class="form-select">
                    <option selected>Select Reason/s*</option>
                    <option value="1">Reason 1 - Division</option>
                    <option value="2">Reason 2 - Division</option>
                    <option value="3">Reason 3 - Division</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <p>Chooose Date*</p>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Enter Date"
                  />
                </div>
                <div class="col-md-6">
                  <p>Choose Time*</p>
                  <input
                    type="time"
                    class="form-control"
                    placeholder="Enter Email"
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
                    class="btn btn-outline-secondary float-end me-2"
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

<script scoped></script>
