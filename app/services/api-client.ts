import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
