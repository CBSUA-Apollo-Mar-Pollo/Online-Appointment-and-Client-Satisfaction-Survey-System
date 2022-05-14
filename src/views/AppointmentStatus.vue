<template>
<NavBar/>
  <div class="container">
    <div class="animation-ctn">
      <br />
      <div class="section-title p-0">
        <h2 class="ref">Check Service Request Status</h2>
      </div>
      <p class="mt-2">
        Please enter below the request number you received to view <br />
        the status of your appointment request:
      </p>

      <form @submit.prevent="onSubmit">
        <div>
          <input type="text" class="p-1 mt-3 border-2" id="text2" required v-model="referenceNum"/>
        </div>
        <!-- <input
          type="button"
          class="col-2 btn bg-primary text-white mt-3 button"
          @click="showAlert"
          value="Submit"
        /> -->
        <button class="col-2 btn bg-primary text-white mt-3 button" @click="showAlert">Submit</button>
      </form>
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
</style>

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
    const referenceNum = ref("");
    const onSubmit = () => {
      const Data = Parse.Object.extend("test");
      const query = new Parse.Query(Data);
      query.equalTo("referenceNum" , { referenceNum : referenceNum.value} ).then(
        (data) => {
          console.log(data.map((e) => e.attributes));
        },
        (error) => {
          console.log(error);
        }
    );
    console.log({ referenceNum : referenceNum.value})
    }

    return {
      referenceNum , 
      onSubmit
    }
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "Processed",
          text: "",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        })
        .then(function () {
          window.location = "/SurveyForm";
        });
    },
  },
};
</script>
