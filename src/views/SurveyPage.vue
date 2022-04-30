<template>
  <section id="SurveyForm" class="SurveyPage p-0">
    <div class="container" data-aos="fade-up">
      <div class="section-title text-left">
        <h2>SATISFACTION SURVEY</h2>
        <p class="survey">
          This survey questionnaire is a tool in determining or measuring the
          client satisfaction level on the availment of CHED critical/offered
          services. It also captures the total citizen/client experience,
          expectations, and satisfaction in the delivered public service.
        </p>
      </div>

      <div class="survey-content">
        <form action="/">
          <table>
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
            <tr>
              <td class="first-col">
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="none" name="q1" /></td>
              <td><input type="radio" value="none" name="q1" /></td>
              <td><input type="radio" value="none" name="q1" /></td>
              <td><input type="radio" value="none" name="q1" /></td>
              <td><input type="radio" value="none" name="q1" /></td>
            </tr>
            <tr>
              <td class="first-col">
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="none" name="q2" /></td>
              <td><input type="radio" value="none" name="q2" /></td>
              <td><input type="radio" value="none" name="q2" /></td>
              <td><input type="radio" value="none" name="q2" /></td>
              <td><input type="radio" value="none" name="q2" /></td>
            </tr>
            <tr>
              <td class="first-col">
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="none" name="q3" /></td>
              <td><input type="radio" value="none" name="q3" /></td>
              <td><input type="radio" value="none" name="q3" /></td>
              <td><input type="radio" value="none" name="q3" /></td>
              <td><input type="radio" value="none" name="q3" /></td>
            </tr>
            <tr>
              <td class="first-col">
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="none" name="q4" /></td>
              <td><input type="radio" value="none" name="q4" /></td>
              <td><input type="radio" value="none" name="q4" /></td>
              <td><input type="radio" value="none" name="q4" /></td>
              <td><input type="radio" value="none" name="q4" /></td>
            </tr>
            <tr>
              <td class="first-col">
                5. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed?
              </td>
              <td><input type="radio" value="none" name="q5" /></td>
              <td><input type="radio" value="none" name="q5" /></td>
              <td><input type="radio" value="none" name="q5" /></td>
              <td><input type="radio" value="none" name="q5" /></td>
              <td><input type="radio" value="none" name="q5" /></td>
            </tr>
          </table>
          <h4 class="pt-4">Comment/s:</h4>
          <textarea
            class="rounded"
            rows="5"
            placeholder=" Your answer "
          ></textarea>
          <div class="btn-block">
            <button type="submit" href="/">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

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
  padding: 3px;
}
form {
  width: 1200px;
  padding: 80px;
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
  width: 150px;
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
.section-title h2 {
  padding: 10px 0 0 170px;
  color: #7dd3fc;
}
.survey {
  color: rgb(85, 85, 85);
  font-size: 18px;
  padding: 0px 160px 20px 170px;
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
    background: #fff;
    box-shadow: 0 2px 5px #ccc;
  }
  .survey {
    color: rgb(85, 85, 85);
    font-size: 15px;
    padding: 20px;
    margin-top: -15px;
    text-align: center;
  }
  .section-title h2 {
    font-size: 25px;
    padding: 0 0 20px 0;
    text-align: center;
  }
}
</style>
