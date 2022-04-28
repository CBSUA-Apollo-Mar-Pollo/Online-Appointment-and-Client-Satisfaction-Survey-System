<template>
  <section id="SurveyForm" class="SurveyPage">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>SATISFACTION SURVEY</h2>
        <p>
          This survey questionnaire is a tool in determining or measuring the
          client satisfaction level on the availment of CHED critical/offered
          services. It also captures the total citizen/client experience,
          expectations, and satisfaction in the delivered public service.
        </p>
      </div>
      <div class="main-block">
        <form action="/">
          <div>
            <h5>Please check the service(s) availed of. *</h5>
            <table>
              <tr>
                <th class="first-col"></th>
                <th>Very Satisfied</th>
                <th>Satisfied</th>
                <th>Not Sure</th>
                <th>Dissatisfied</th>
                <th>Very Dissatisfied</th>
              </tr>
              <tr>
                <td class="first-col">1. Lorem Ipsum?</td>
                <td><input type="radio" value="none" name="interest" /></td>
                <td><input type="radio" value="none" name="interest" /></td>
                <td><input type="radio" value="none" name="interest" /></td>
                <td><input type="radio" value="none" name="interest" /></td>
                <td><input type="radio" value="none" name="interest" /></td>
              </tr>
              <tr>
                <td class="first-col">2. Lorem Ipsum?</td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
              </tr>
              <tr>
                <td class="first-col">3. Lorem Ipsum?</td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
              </tr>
              <tr>
                <td class="first-col">4. Lorem Ipsum?</td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
                <td><input type="radio" value="none" name="managed" /></td>
              </tr>
              <tr>
                <td class="first-col">5. Lorem Ipsum?</td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
                <td><input type="radio" value="none" name="organized" /></td>
              </tr>
            </table>
          </div>
          <br />
          <h5>Comment/s:</h5>
          <textarea rows="5"></textarea>
          <div class="btn-block">
            <button type="submit" href="/">Send</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SurveyPage",
};
</script>

<style scoped>
html,
body {
  min-height: 100%;
}
body,
input {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1,
h4 {
  font-weight: 400;
}
h4 {
  margin: 22px 0 4px;
}
h5 {
  text-transform: uppercase;
  color: #095484;
}
.main-block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
form {
  width: 100%;
  padding: 50px;
  box-shadow: 0 2px 5px #ccc;
  background: #fff;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  vertical-align: middle;
}
textarea {
  width: calc(100% - 6px);
  outline: none;
}
input:hover,
textarea:hover {
  outline: none;
  border: 1px solid #095484;
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
  word-break: break-all;
}
.additional-question th,
.additional-question td {
  width: 38%;
}
.course-rate th,
.course-rate td {
  width: 19%;
}
.first-col,
.additional-question .first-col,
.course-rate .first-col {
  width: 24%;
  text-align: left;
}
.question,
.comments {
  margin: 15px 0 5px;
}
.question-answer label {
  display: inline-block;
  padding: 0 20px 15px 0;
}
.question-answer input {
  width: auto;
}
.question-answer,
table {
  width: 100%;
}
.btn-block {
  margin-top: 20px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #095484;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: #0666a3;
}
@media (min-width: 568px) {
  th,
  td {
    word-break: keep-all;
  }
}
</style>
