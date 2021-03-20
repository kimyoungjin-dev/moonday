import axios from "axios";

const api = axios.create({
  baseURL: "https://moonapi.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "df115aed1dmsh4ac4cca2578464ep16c576jsn3e2040c9228f",
    "x-rapidapi-host": "moonapi.p.rapidapi.com",
  },
});

const api2 = axios.create({
  baseURL: "https://moon-phase.p.rapidapi.com",
  params: { raw: "true" },
  headers: {
    "x-rapidapi-key": "57569344bdmshc8ea641764a873fp13f966jsnaf738e6d01b5",
    "x-rapidapi-host": "moon-phase.p.rapidapi.com",
  },
});

export const moonApi = () => api.get("/1606888400");
//moonphase
export const moonPhaseApi = () => api2.get("/moon_phase");
