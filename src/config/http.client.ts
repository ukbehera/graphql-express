import axios from "axios";
import { config } from "./env";
console.log(config.API_URL);
export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: { "User-Agent": "GraphQL-API" },
  family: 4, // Force IPv4
});
