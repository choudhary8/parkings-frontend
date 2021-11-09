import axios from "axios";
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const getBookedSpaces = async ()=>{
    const res=await axios.get(`${apiBaseUrl}/booked-space`,
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
    }
    )
    // console.log("book",res.data);
    return res.data;
}

export default getBookedSpaces;