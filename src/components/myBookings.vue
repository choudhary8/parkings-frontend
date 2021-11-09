<template>
  <div class="container px-5 my-5">
    <h1>My Past Bookings</h1>
    <div v-for="booking in spaces" :key="booking._id" class="my-3">
      <div>Pincode: {{ booking.address.pincode }}</div>
      <div>colony: {{ booking.address.colony }}</div>
      
      <div>Vehicle:{{ booking.vehicle }}</div>
      <hr/>
    </div>
  </div>
</template>

<script>
import getMyBookings from "@/Services/myBookings";

export default {
  data() {
    return {
      spaces: [],
    };
  },
  created() {
    getMyBookings()
      .then((data) => {
        // console.log("Bookings ", data);
        this.spaces = data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
li{ border:1px; }
<style scoped></style>
