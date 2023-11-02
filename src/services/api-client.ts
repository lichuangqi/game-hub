import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5e730d662ab6488498e3e88fce8478b1",
  },
});
