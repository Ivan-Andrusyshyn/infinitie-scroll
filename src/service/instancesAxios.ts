import axios from "axios";
import BASE_URL from "./baseUrl";

const client = axios.create({
  baseURL: BASE_URL.rickAndMorty,
});

export { client };
// can be more
