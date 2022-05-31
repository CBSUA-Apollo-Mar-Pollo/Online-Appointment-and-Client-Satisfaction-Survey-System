<template>

  <div class="searchBar">
    <!-- Filter Search -->
      <div class="input-group mb-5">
        <input type="search" class="form-control" v-model='searchQuery' placeholder="Search here..." aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
  </div>
<table id="tableComponent" class="table table-bordered table-striped">
  <thead>
    <tr>
      <!-- loop through each value of the fields to get the table header -->
      <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
        {{field}}
       </th>
    </tr>
  </thead>
  <tbody>

      <!-- Loop through the list get the each appointment data -->
      <tr v-for="item in filteredList" @click="handleClick(item)" :key='item'>
      <td class="cursor-pointer" v-for="field in fields" :key='field'>{{item[field]}}</td>
    </tr>
  </tbody> 
</table>
    <p
      v-if="filteredList.length < 1"
      class="text-center"
    >
      No Appointment yet
    </p>
    <div v-if="showModal">
      <Modal  @close="handleClick">
        <div v-if="data.status === 'Request Accepted'">
            <div class="mt-2">
              <h1 class="p-2"><b>Name :</b> {{ data.fName }} {{ data.lName }}</h1>
              <h1 class="p-2"><b>Email :</b> {{ data.emailAdd }}</h1>
              <h1 class="p-2"><b>Contact Number:</b> {{ data.contactNum }}</h1>
              <h1 class="p-2"><b>Affliation Of Client:</b> {{ data.AffliationOfClient }}</h1>
              <h5 class="p-2"><b>Reason for the Visit :</b> {{ data.reasonOfVisit }}</h5>
              <h5 class="p-2"><b>Date and time :</b> {{ data.date + "," + data.time }}</h5>
              <h5 class="p-2"><b>Reason for Appointment :</b> {{ data.comments }}</h5>
          </div>
          <div class="buttons">
              <button @click="CompleteRequest(data)">Appointment Completed</button>
              <button @click="reason()">{{ showReason === false ? 'Reject Request' : 'close' }}</button>
          </div>
        </div>
        <div v-else>
          <div class="mt-2">
          <h1 class="p-2"><b>Name :</b> {{ data.fName }} {{ data.lName }}</h1>
          <h1 class="p-2"><b>Email :</b> {{ data.emailAdd }}</h1>
          <h1 class="p-2"><b>Contact Number:</b> {{ data.contactNum }}</h1>
          <h1 class="p-2"><b>Affliation Of Client:</b> {{ data.AffliationOfClient }}</h1>
          <h5 class="p-2"><b>Reason for the Visit :</b> {{ data.reasonOfVisit }}</h5>
          <h5 class="p-2"><b>Date and time :</b> {{ data.date + "," + data.time }}</h5>
          <h5 class="p-2"><b>Reason for Appointment :</b> {{ data.comments }}</h5>
        </div>
          <div v-if="data.status === 'Completed'">
            <h1></h1>
          </div>
          <div v-else>
            <div class="buttons">
              <button @click="acceptRequest(data)">Accept Request</button>
              <button @click="reason()">{{ showReason === false ? 'Reject Request' : 'close' }}</button>
            </div>
          </div>
          
          <div class="col-12" v-if="showReason">
                  <p>Reason:</p>
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    v-model="comments"
                  ></textarea>
                  <div class="buttons">
                     <button @click="declineRequest(data)">Send</button>
                  </div>
          </div>
        </div>
       
      </Modal>
    </div> 
</template>
<script>
import {computed,ref} from "vue";
// Importing  the lodash library 
import { sortBy} from 'lodash';
import Modal from "../Modal.vue";
import Parse from "parse";
import emailjs from 'emailjs-com';
import { useRouter } from "vue-router";

export default {
  name: 'TableComponent',
  props:{
      appointmentData:{
          type: Array,
      },
      fields:{
          type: Array,
      }
  },
  components: {
    Modal,
  },
  data() {
    return {
      showModal : false,
      showReason : false,
      comments: '',
      data : []
    }
  },
  methods: {
    handleClick(field) {
      console.log(field);
      this.data  = field
      this.showModal = !this.showModal
    },
    acceptRequest(data) {
      console.log("Accept Request", data.referenceNum);
      var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", data.referenceNum);
      query.first().then(
        async (data) => {
          console.log(data.attributes);
           data.set("status", "Request Accepted");
           data.save();
           location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    CompleteRequest(data) {
      const router = useRouter();
      console.log("Accept Request", data.referenceNum);
      var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", data.referenceNum);
      query.first().then(
        async (data) => {
          console.log(data.attributes);
           data.set("status", "Completed");
           data.save();
           emailjs.send('service_bc6nlv6', 'template_eb51gnn', data.attributes, 'AUOfD5xoR_mTisc5k')
          .then((result) => {
              console.log('SUCCESS!', result.text);
              location.reload();
          }, (error) => {
              console.log('FAILED...', error.text);
          });
        },
        (error) => {
          console.log(error);
        }
      );
    },
    reason() {
       this.showReason = !this.showReason
    },
    declineRequest(data) {
      console.log("Decline Request");
       var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", data.referenceNum);
      query.first().then(
        async (data) => {
          console.log(data.attributes);
           data.set("status", "Rejected");
           data.set("RejectedMessage", this.comments);
           data.save();
           location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
      this.showModal = !this.showModal
    }
  },
  
  setup(props) {
    let sort = ref(false);
    let updatedList =  ref([])
    let searchQuery = ref("");
    
        // a function to sort the table
    const sortTable = (col) => {
      sort.value = true
       // Use of _.sortBy() method
      updatedList.value = sortBy(props.appointmentData,col)
      }

    const sortedList = computed(() => {
      if (sort.value) {
         return updatedList.value
      }
      else{
         return props.appointmentData;
      }
      });


      // Filter Search
      const filteredList = computed(() => {
          return sortedList.value.filter((product) => {
            return (
              product.fName.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
            );
          });
});   
  return {sortedList, sortTable,searchQuery,filteredList }
  }
 
}
</script>
<style scoped>
h5{
  padding: 4px ;
}
.buttons {
  margin : 20px  0 0 0;
}
.buttons button {
  margin: 1%;
  padding:2% 4%;
  font-size: 0.9em;
  background-color: rgb(34, 179, 204);
  color: #fff;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: 'Outfit', sans-serif;
  transition: all 0.4s ease-in-out;
}

.table td , th{
  border: none;
  padding: 10px ;
}
.table th{
  padding: 20px 10px;
}
.table tr {
  background-color: #fff;
}
.table td{
  padding: 15px 5px;
  background-color: #fff;
}
.table th:nth-child(4) {
  padding: 10px 5px;
  background-color: #fff;
  width: 20%;
}
table th:hover {
        background:#f2f2f2;
      }
</style>
