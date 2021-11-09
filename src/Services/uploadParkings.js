import axios from "axios";
import AppConfig from "@/config";

const { apiBaseUrl } = AppConfig;

const uploadParkings = async (parkingDetails) => {
  await axios
    .post(`${apiBaseUrl}/upload-space`, parkingDetails, {
      headers: {
        "content-type": " application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("upload data>>>>", res.data);
      return res.data;
    });
};

export default uploadParkings;
