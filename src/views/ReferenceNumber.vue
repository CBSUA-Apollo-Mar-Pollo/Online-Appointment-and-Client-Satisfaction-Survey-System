<template>
  <NavBar />
  <div class="container">
    <div class="animation-ctn">
      <div class="icon icon--order-success svg justify-around d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
          <g fill="none" stroke="#22AE73" stroke-width="2">
            <circle
              cx="77"
              cy="77"
              r="72"
              style="stroke-dasharray: 480px, 480px; stroke-dashoffset: 960px"
            ></circle>
            <circle
              id="colored"
              fill="#22AE73"
              cx="77"
              cy="77"
              r="72"
              style="stroke-dasharray: 480px, 480px; stroke-dashoffset: 960px"
            ></circle>
            <polyline
              class="st0"
              stroke="#fff"
              stroke-width="10"
              points="43.5,77.8 63.7,97.9 112.2,49.4 "
              style="stroke-dasharray: 100px, 100px; stroke-dashoffset: 200px"
            />
          </g>
        </svg>
      </div>
      <br />
      <div class="section-title p-0">
        <h2 class="ref">Reference ID</h2>
      </div>
      <p>To see your appointment status, copy the request number below</p>
      <h2 class="number">#{{ ReferenceNumber.referenceNum }}</h2>
      <div class="text-center">
        <button class="col-2 btn bg-light mt-3 button">Copy</button><br />
        <button
          class="col-2 btn bg-primary text-white mt-3 button"
          onclick="location.href='/AppointmentStatus';"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-shadow: 0 2px 5px rgb(175, 175, 175);
  padding: 5px;
  width: 50%;
  margin-top: 30px;
}

.bg-light {
  color: #008aff;
}

.section-title h2 {
  color: #008aff;
}

.ref {
  margin: 5px 0 1px 0;
}

.number {
  font-size: 50px;
  font-weight: 700px;
  position: relative;
  color: #45505b;
  margin: 15px;
}

.alert {
  background: #f8d7da;
  padding: 5px 10px;
  border-radius: 8px;
}
.animation-ctn {
  text-align: center;
  margin: 5em auto;
}

@-webkit-keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 200px;
  }
}

@-ms-keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 200px;
  }
}

@keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 0px;
  }
}

@-webkit-keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 480px;
  }

  100% {
    stroke-dashoffset: 960px;
  }
}

@-ms-keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 240px;
  }

  100% {
    stroke-dashoffset: 480px;
  }
}

@keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 480px;
  }

  100% {
    stroke-dashoffset: 960px;
  }
}

@keyframes colored-circle {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}

.inlinesvg .svg svg {
  display: inline;
}

.icon--order-success svg polyline {
  -webkit-animation: checkmark 0.3s ease-in-out 0.9s backwards;
  animation: checkmark 0.3s ease-in-out 0.9s backwards;
}

.icon--order-success svg circle {
  -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
  animation: checkmark-circle 0.6s ease-in-out backwards;
}
.icon--order-success svg circle#colored {
  -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
  animation: colored-circle 0.6s ease-in-out 0.7s backwards;
}

@media only screen and (max-width: 600px) {
  .container {
    margin-top: 30px;
    width: 90%;
  }
  .AppointmentPage {
    padding: 0;
  }
  .app-con {
    margin-top: 1rem !important;
  }
  .number {
    font-size: 30px;
  }
  .col-2 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
}
</style>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },

  setup() {
    const ReferenceNumber = JSON.parse(localStorage.getItem("storedData"));

    return {
      ReferenceNumber,
    };
  },
};
</script>
