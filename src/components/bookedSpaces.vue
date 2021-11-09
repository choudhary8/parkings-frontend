<template>
  <div class="container px-5 my-5">
    <h1>Booked Spaces by Customers</h1>
      <div v-for="booking in spaces" :key="booking._id">
       
        <div>pinCode:{{ booking.address.pincode }}</div>
        <div>colony:{{ booking.address.colony }}</div>

        User Email:{{ booking.email }}
       

        <div>pinCode:{{ booking.vehicle }}</div>
         <hr />
      </div>
   
  </div>
</template>

<script>
import getBookedSpaces from "@/Services/bookedSpaces";
export default {
  data() {
    return {
      spaces: [],
      
     
    };
  },
  async created() {
    try {
      const data = await getBookedSpaces();
      // console.log(data);
      this.spaces=data;
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<style scoped></style>
