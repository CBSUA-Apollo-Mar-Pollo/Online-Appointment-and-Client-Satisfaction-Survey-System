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
          <h1><b>Email :</b> {{ data.emailAdd }}</h1>
          <h5><b>Reason for the Visit :</b> {{ data.reasonOfVisit }}</h5>
          <h5><b>Date and time :</b> {{ data.date + " " + data.time }}</h5>
          <div class="buttons">
            <button @click="acceptRequest(data)">Accept Request</button>
            <button @click="declineRequest(data)">Decline Request</button>
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
    declineRequest(data) {
      console.log("Decline Request");
       var Data = Parse.Object.extend("test");
      var query = new Parse.Query(Data);
      query.equalTo("referenceNum", data.referenceNum);
      query.first().then(
        async (data) => {
          console.log(data.attributes);
           data.set("status", "Rejected");
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
