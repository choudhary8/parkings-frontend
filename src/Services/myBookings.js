import axios from "axios";
// import AppConfig from "@/config";

// const { apiBaseUrl } = AppConfig;

const getMyBookings = async () => {
  console.log("Token >>>>", localStorage.getItem("token"));
  return await axios
    .get(`http://localhost:3000/my-bookings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("Data", res);
      return res.data;
    });
};

export default getMyBookings;
