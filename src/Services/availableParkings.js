import axios from "axios";
// import AppConfig from "@/config";

// const { apiBaseUrl } = AppConfig;

const getAvailableParkings =  (bookingDetails) => {
  console.log("post data ", bookingDetails);
  return axios
    .post(`http://localhost:3000/search-space`, bookingDetails, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("DATA >>>>>",res);
      return res.data
    })
    .catch((err) =>console.log(err) );
};

export default getAvailableParkings;
