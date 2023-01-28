import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://hteam.hackathon.sparcs.org",
});

export const fetcher =
  ({ auth }: { auth?: string } = {}) =>
  (url: string) =>
    axiosClient
      .get(url, auth ? { headers: { Authorization: `Bearer ${auth}` } } : undefined)
      .then((res) => res.data);
