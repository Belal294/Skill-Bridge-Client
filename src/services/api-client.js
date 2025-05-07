import axios from "axios";

export default axios.create({
  baseURL: "https://skill-bridge-silk.vercel.app/api/v1",
});