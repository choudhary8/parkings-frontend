<template>
  <div class="container px-5 my-5">
    <h1>Search Parking Space</h1>
    <b-form @submit.prevent="onSubmit" v-if="show" class="my-3">
      <b-form-group
        id="input-group-1"
        label="Enter Pincode"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model.number="form.address.pincode"
          type="text"
          placeholder="Enter pinCode"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter Colony" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.address.colony"
          placeholder="Enter colony"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Select VehicleType"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.vehicleType"
          :options="vehicleTypes"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Search</b-button>
    </b-form>

    <div v-if="isShow === 'searches'">
    <div v-if="parkings.length===0">No available space for now</div>
        <div v-for="booking in parkings" :key="booking.address.pincode">
          Address:
          <div>pinCode:{{ booking.address.pincode }}</div>
          <div>colony:{{ booking.address.colony }}</div>
          <hr />
          <button @click="bookParking(booking)">Book Parking</button>
        </div>
    
    </div>
  </div>
</template>

<script>
import getAvailableParkings from "@/Services/availableParkings";
import bookParking from "@/Services/bookParking";
export default {
  data() {
    return {
      isShow: "form",
      form: {
        address: {
          pincode: null,
          colony: "",
        },
        vehicleType: null,
      },
      vehicleTypes: [{ text: "Select One", value: null }, "car", "bike"],
      show: true,
      parkings: [],
    };
  },
  // computed:{
  //   parking:()=>this.parkings
  // },
  methods: {
    onSubmit() {
      console.log("Form Data ", this.form);
      getAvailableParkings(this.form)
        .then((data) => {
          console.log("data of form", data);
          this.parkings = data;
          this.isShow = "searches";
        })
        .catch((err) => console.log(err));
    },
    bookParking(data) {
      bookParking(data);
      this.address.pincode = 0;
      this.address.colony = "";
      this.vehicleType = "";
      this.isShow = "form";
    },
  },
};
</script>
<style scoped></style>
