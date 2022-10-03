import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-backend1.herokuapp.com/",
});
