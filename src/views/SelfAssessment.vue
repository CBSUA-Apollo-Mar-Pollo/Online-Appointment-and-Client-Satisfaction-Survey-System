<template>
  <NavBar />
  <section id="SurveyForm" class="SurveyPage">
    <div class="container" data-aos="fade-up">
      <header class="header">
        <div class="section-title text-center pb-0">
          <h2>COVID-19 Form</h2>
          <br />
          <p class="survey">
            For the health and safety of our community,declaration of illness is
            required. Be sure that the information youll give is accurate and
            complete.Please get immediate medical attention if you have any of
            the COVID-19 signs.
          </p>
        </div>
      </header>
      <form class="mt-3" id="survey-form" @submit.prevent="onSubmit">
        <hr />
        <div class="form-check form-content">
          <p>Do you have any of the following symptoms ?</p>
          <br />
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              name="difficulties"
              id="Persistent Cough"
              value="New and Persistent Cough"
              v-model="difficulties"
            />
            New and Persistent Cough
          </label>
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              name="difficulties"
              id="Shortness of breath"
              value="Shortness of breath or any difficulty breathing"
              v-model="difficulties"
            />
            Shortness of breath or any difficulty breathing
          </label>
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              name="difficulties"
              id="Fever"
              value="Fever"
              v-model="difficulties"
            />
            Fever
          </label>
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              name="difficulties"
              id="Diabetes"
              value="No Symptoms"
              v-model="difficulties"
            />
            No Symptoms
          </label>
        </div>
        <div class="form-check form-content">
          <p>
            Have you been in contact with anyone in the last 15 days who is
            experiencing these symptoms ?
          </p>
          <br />
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="past-15-days"
              id="1-5"
              value="Yes"
              v-model="past15days"
            />
            Yes
          </label>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="past-15-days"
              id="5-10"
              value="No"
              v-model="past15days"
            />
            No
          </label>
        </div>
        <div class="form-check form-content">
          <p>
            Have you been in contact with anyone who has since tested positive
            for Covid-19?
          </p>
          <br />
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="PositiveContact"
              id="1-5"
              value="Yes"
              v-model="PositiveContact"
            />
            Yes
          </label>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="PositiveContact"
              id="5-10"
              value="No"
              v-model="PositiveContact"
            />
            No
          </label>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="PositiveContact"
              id="5-10"
              value="Not Sure"
              v-model="PositiveContact"
            />
            Not Sure
          </label>
        </div>
        <div class="form-group form-content">
          <p>
            Have you travelled abroad in the last 1-2 months? Where did you go ?
          </p>
          <label class="other-difficulties"></label>
          <textarea
            class="form-control"
            name="difficulties"
            id="other-difficulties"
            v-model="travelAbroad"
            rows="3"
          ></textarea>
        </div>
        <hr />
        <br />
        <div class="text-center">
          <button
            class="col-8 btn bg-primary text-white"
            href="/ReferenceNumber"
            role="button"
            id="submit"
            type="submit"
          >
            Request My Appointment</button
          ><br />
          <a
            class="col-8 bg-light text-primary"
            href="/AppointmentForm"
            role="button"
            id="submit"
            type="submit"
          >
            Back
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.section-title h2 {
  padding: 50px 50px 0px 50px;
  color: #008aff;
}

.survey {
  color: rgb(85, 85, 85);
  font-size: 18px;
  padding: 0px 50px 0px 50px;
  font-weight: 300;
  text-align: justify;
}

.SurveyPage {
  padding: 50px;
}

.form-content {
  padding: 30px 50px 0 50px;
}

.container {
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgb(175 175 175);
  border-radius: 10px;
  margin-bottom: 150px;
  width: 50%;
}

.container header {
  margin: 0px;
  padding: 0;
  color: black;
  text-align: center;
}

.container .form-group {
  position: relative;
}

@media screen and (max-width: 600px) {
  .section-title h2 {
    color: #008aff;
    font-size: 25px;
    padding: 30px 0px 0px 0px;
  }
  .survey {
    color: rgb(85, 85, 85);
    font-size: 15px;
    text-align: justify;
    padding: 0px;
  }
  .SurveyPage {
    margin-top: 1rem !important;
    padding: 0px;
  }
  .container {
    width: auto;
    margin-bottom: 0px;
    margin: 10px;
  }
  .form-content {
    word-break: break-all;
    padding: 20px 0px 20px 0px;
  }
  .form-content p {
    font-size: 15px;
  }
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="date"],
select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

input[type="text"]:focus {
  background-color: rgb(243, 248, 250);
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  font-size: 16px;
  color: black;
  box-sizing: border-box;
  border: 2px solid rgb(247, 245, 245);
  border-radius: 4px;
  background-color: transparent;
  resize: vertical;
}

#symptoms-table {
  border-collapse: collapse;
  width: 100%;
}

#symptoms-table td,
#symptoms-table thead {
  border: none;
  padding: 8px;
  align-items: center;
}

#symptoms-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-weight: normal;
}

a {
  padding: 10px;
  margin: 0 0 20px 0;
  border: none;
  cursor: pointer;
}

/* input[type="submit"]:hover {
  background-color: #45a049;
} */

h1 {
  font-weight: 400;
  line-height: 1.2;
}

p {
  font-size: 1.125rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bolder;
}

label {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.form-check-label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
}

/* Hide the browser's default checkbox */

input[type="radio"] input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.form-check-label-table {
  display: flex;
  justify-content: center;
}
</style>

<script>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
import { test } from "@/parse/test";
import { covidForm } from "@/parse/covid19form";
// eslint-disable-next-line no-unused-vars
import Parse from "parse";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
  },

  setup() {
    const difficulties = ref([]);
    const past15days = ref("");
    const PositiveContact = ref("");
    const travelAbroad = ref("");
    const userData = JSON.parse(localStorage.getItem("storedData"));
    const router = useRouter();

    const onSubmit = () => {
      console.log({
        symptoms: difficulties.value._rawValue,
        past15days: past15days.value,
        PositiveContact: PositiveContact.value,
        travelAbroad: travelAbroad.value,
        emailAdd: userData.emailAdd,
      });
      test.save(userData);
      covidForm.save({
        symptoms: difficulties.value._rawValue,
        past15days: past15days.value,
        PositiveContact: PositiveContact.value,
        travelAbroad: travelAbroad.value,
        emailAdd: userData.emailAdd,
      });

      router.push({ name: "ReferenceNumber" });
    };
    console.log(userData);
    return {
      onSubmit,
      difficulties,
      past15days,
      PositiveContact,
      travelAbroad,
      userData,
    };
  },
};
</script>
