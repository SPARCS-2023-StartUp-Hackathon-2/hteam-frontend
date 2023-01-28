import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://hteam.hackathon.sparcs.org",
});
