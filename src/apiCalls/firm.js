import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function getAllFirms() {
  try {
    const response = await axios.get(`${BASE_API}/firms/all/`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
