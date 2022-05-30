<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="far fa-times-circle"></i>
          <StatusInformation />
          <slot />
          <div class="text-center">
            <button class="col-8 btn btn-basic m-3" @click="close" type="button">
              Close
            </button>
            <button class="col-8 btn btn-basic" @click="cancel" type="button">
              Cancel Appointment
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import StatusInformation from "./StatusInfo.vue";
import { useStore } from 'vuex'
import { ref , reactive , computed} from "vue";
import Parse from "parse";

export default {
  components: {
    StatusInformation,
  },

  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      const refNum = store.state.status;
      console.log("data", refNum.referenceNum);
      var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", refNum.referenceNum);
      query.first().then((data) => {
        if(data.attributes.status === 'Request Accepted'){
          //location.href='/SurveyForm';
          localStorage.setItem("status", JSON.stringify(data.attributes));
          var Data = Parse.Object.extend("CSS");
          var query = new Parse.Query(Data);
          query.equalTo("emailAdd", data.attributes.emailAdd);
          query.first().then((data) => {
            try {
              emit("close");
              console.log(data.attributes)
            } catch (e) {
              location.href='/SurveyForm';
            }
          })
        } else {
          emit("close");
        }
        //console.log(data.attributes.emailAdd);
      })
      //emit("close");
      //location.href='/SurveyForm';
      //window.location.reload();
    };
    const store = useStore();

    const cancel = () => {
      const refNum = store.state.status;
      console.log("Cancel Request", refNum.referenceNum);
      var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", refNum.referenceNum);
      query.first().then(
        async (data) => {
          console.log(data.attributes);
           data.set("status", "Canceled");
           data.save();
           location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    

    return { close , cancel , refNum: computed(() => store.state.status) };
  },
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 70%;
  width: -webkit-fill-available;
  transform: translate(0%, 10%);

  // background-color: rgb(255, 255, 255);

  .modal-inner {
    position: relative;
    max-width: fit-content;
    // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    // background-color: #fff;

    i {
      position: absolute;
      right: 15px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: crimson;
      }
    }

    button {
      border: none;
      font-size: 16px;
      background-color: #c1c1c1;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
