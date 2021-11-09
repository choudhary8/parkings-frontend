import axios from "axios";
import AppConfig from "@/config";

const { apiBaseUrl } = AppConfig;

const bookParking = async (bookingDetails) => {
  await axios
    .post(`${apiBaseUrl}/book-space`, bookingDetails, {
      headers: {
        "content-type": " application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => res.data);
};

export default bookParking;
