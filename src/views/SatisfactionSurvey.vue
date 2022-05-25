<template>
  <NavBar />
  <section id="SurveyForm" class="SurveyPage p-0">
    <div class="container" data-aos="fade-up">
      <div class="survey-content">
        <form  @submit.prevent="handleSubmit">

          <table>
            <div class="section-title text-left">
              <h2>Client Satisfaction Survey</h2>
              <p class="survey">
                This survey questionnaire is a tool in determining or measuring
                the client satisfaction level on the availment of CHED
                critical/offered services. It also captures the total
                citizen/client experience, expectations, and satisfaction in the
                delivered public service.
              </p>
            </div>
            <tr>
              <h1 class="pb-3 text-center">
                Please rate our service under each specific dimensions in scale
                of 1 to 5 points <br />
                <strong>5</strong> = Very Satisfied | <strong>4</strong> =
                Satisfied | <strong>3</strong> = Not Sure | <strong>2</strong> =
                Dissatisfied | <strong>1</strong> = Very Dissatisfied
              </h1>
              <th class="first-col"></th>
              <th>5</th>
              <th>4</th>
              <th>3</th>
              <th>2</th>
              <th>1</th>
            </tr>
          </table>

          <table>
            <tr>
              <td class="first-col">
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="Very Satisfied" name="" v-model="pickedNo1"/></td>
              <td><input type="radio" value="Satisfied" name="" v-model="pickedNo1"/></td>
              <td><input type="radio" value="Not Sure" name="" v-model="pickedNo1"/></td>
              <td><input type="radio" value="Dissatisfied" name="" v-model="pickedNo1"/></td>
              <td><input type="radio" value="Very Dissatisfied" name="" v-model="pickedNo1"/></td>
            </tr>
            <tr>
              <td class="first-col">
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="Very Satisfied" name="" v-model="pickedNo2"/></td>
              <td><input type="radio" value="Satisfied" name="" v-model="pickedNo2"/></td>
              <td><input type="radio" value="Not Sure" name="" v-model="pickedNo2"/></td>
              <td><input type="radio" value="Dissatisfied" name="" v-model="pickedNo2"/></td>
              <td><input type="radio" value="Very Dissatisfied" name="" v-model="pickedNo2"/></td>
            </tr>
            <tr>
              <td class="first-col">
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
               <td><input type="radio" value="Very Satisfied" name="" v-model="pickedNo3"/></td>
              <td><input type="radio" value="Satisfied" name="" v-model="pickedNo3"/></td>
              <td><input type="radio" value="Not Sure" name="" v-model="pickedNo3"/></td>
              <td><input type="radio" value="Dissatisfied" name="" v-model="pickedNo3"/></td>
              <td><input type="radio" value="Very Dissatisfied" name="" v-model="pickedNo3"/></td>
            </tr>
            <tr>
              <td class="first-col">
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
               <td><input type="radio" value="Very Satisfied" name="" v-model="pickedNo4"/></td>
              <td><input type="radio" value="Satisfied" name="" v-model="pickedNo4"/></td>
              <td><input type="radio" value="Not Sure" name="" v-model="pickedNo4"/></td>
              <td><input type="radio" value="Dissatisfied" name="" v-model="pickedNo4"/></td>
              <td><input type="radio" value="Very Dissatisfied" name="" v-model="pickedNo4"/></td>
            </tr>
            <tr>
              <td class="first-col">
                5. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="Very Satisfied" name="" v-model="pickedNo5"/></td>
              <td><input type="radio" value="Satisfied" name="" v-model="pickedNo5"/></td>
              <td><input type="radio" value="Not Sure" name="" v-model="pickedNo5"/></td>
              <td><input type="radio" value="Dissatisfied" name="" v-model="pickedNo5"/></td>
              <td><input type="radio" value="Very Dissatisfied" name="" v-model="pickedNo5"/></td>
            </tr>
          </table>
          <h4 class="pt-4">Comment/s:</h4>
          <textarea
            class="rounded"
            rows="5"
            placeholder=" Your answer "
            v-model="comment"
          ></textarea>
          <div class="btn-block">
            <button class="col-5" type="submit" href="/">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
import Parse from "parse";
import { useRouter } from "vue-router";
import { css } from '@/parse/css'


export default {
  components: {
    NavBar,
  },

  setup() {
    const router = useRouter();
    const userData = JSON.parse(localStorage.getItem("storedData"));
    const pickedNo1 = ref("");
    const pickedNo2 = ref("");
    const pickedNo3 = ref("");
    const pickedNo4 = ref("");
    const pickedNo5 = ref("");
    const comment = ref("");

    const handleSubmit = () => {
      console.log({
        No1: pickedNo1.value,
        No2: pickedNo2.value,
        No3: pickedNo3.value,
        No4: pickedNo4.value,
        No5: pickedNo5.value,
        comment: comment.value,
        emailAdd: userData.emailAdd,
      });
      css.save({
        pickedNo1: pickedNo1.value,
        pickedNo2: pickedNo2.value,
        pickedNo3: pickedNo3.value,
        pickedNo4: pickedNo4.value,
        pickedNo5: pickedNo5.value,
        comment: comment.value,
        emailAdd: userData.emailAdd,
      });

      router.push({ name: "WelcomePage" });
    };
    return {
      handleSubmit,
      pickedNo1,
      pickedNo2,
      pickedNo3,
      pickedNo4,
      pickedNo5,
      comment
    };
  },
};
</script>

<style scoped>
html,
body {
  min-height: 100%;
}

div,
form,
input,
p {
  padding: 0;
  margin: 0;
  outline: none;
  font-size: 18px;
  color: #666;
  line-height: 22px;
}
h1 {
  font-weight: 400;
}
h4 {
  margin: 15px 0 4px;
}
.survey-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 50px 3px 3px 3px;
}
form {
  width: 1200px;
  padding: 35px 50px 50px 50px;
  background: #fff;
  box-shadow: 0 2px 5px rgb(175, 175, 175);
}
input {
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
}
input:hover,
textarea:hover {
  outline: none;
  border: 1px solid #298dca;
}
th,
td {
  width: 15%;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
  vertical-align: unset;
  line-height: 18px;
  font-weight: 400;
  word-break: keep-all;
  vertical-align: inherit;
}
th {
  color: #008aff;
  font-weight: bold;
}
.first-col {
  width: 16%;
  text-align: left;
}
table {
  width: 100%;
}
textarea {
  width: calc(100% - 6px);
  border: solid 1px #ccc;
  height: 50px;
}
.btn-block {
  margin-top: 20px;
  text-align: center;
}
button {
  padding: 10px;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #008aff;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #0666a3;
}
.SurveyPage {
  justify-content: center;
  display: flex;
}
.section-title h2 {
  padding: 0px;
  color: #008aff;
}
.survey {
  color: rgb(85, 85, 85);
  font-size: 18px;
  padding: 0px;
}
@media (min-width: 568px) {
  th,
  td {
    word-break: keep-all;
  }
}
@media only screen and (max-width: 600px) {
  div,
  form,
  input,
  p {
    padding: 0;
    margin: 0;
    outline: none;
    font-size: 14px;
    color: #666;
    line-height: 22px;
  }
  th {
    font-size: 10px;
  }
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 5px #ccc;
  }
  .survey {
    color: rgb(85, 85, 85);
    font-size: 14px;
    padding: 10px;
    margin-top: -15px;
    text-align: justify;
  }
  .section-title h2 {
    font-size: 35px;
    padding: 0 0 5px 0;
    text-align: center;
    margin: 0 auto;
  }
  .survey-content {
    padding: 30px 3px 3px 3px;
  }
}
</style>

