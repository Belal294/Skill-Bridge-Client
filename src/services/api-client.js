import axios from "axios";

export default axios.create({
  baseURL: "https://skill-bridge-one.vercel.app/api/v1",
});