import axios from "axios";

const instance = axios.create({
  baseURL: "https://player-music-quiz.herokuapp.com/",
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default instance;
