<template>
  <div class="container px-5 my-5">
     <h1>Upload Parking Space</h1>
    <b-form @submit.prevent="onSubmit" class="my-5">
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
        label="Enter Spaces for Bikes"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model.number="form.vehicle.car"
          placeholder="Enter Bikes"
          description="Enter only in numbers"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Enter Spaces for Bikes"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model.number="form.vehicle.bike"
          placeholder="Enter Bikes"
          description="Enter only in numbers"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Upload</b-button>
    </b-form>
  </div>
</template>

<script>
import uploadParkings from "@/Services/uploadParkings";

export default {
  data() {
    return {
      form: {
        address: {
          pincode: 0,
          colony: "",
        },
        vehicle:{
          car:0,
          bike:0
        }
      },
    };
  },
  methods:{
     async onSubmit(){
      //  console.log("form",this.form.numCars);
         await  uploadParkings(this.form);

      }
  }
};
</script>

<style scoped></style>
