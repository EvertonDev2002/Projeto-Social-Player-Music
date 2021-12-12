import axios from "axios";

const instance = axios.create({
  baseURL: "https://back-end-recollection.herokuapp.com/recollection",
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default instance;
