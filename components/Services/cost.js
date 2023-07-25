import axios from "axios";
import { apiHost } from "@/components/Utils/host.js";

const getCost = (value) => {
  return axios.post(`${apiHost}/cost/getcost`, 
    value
  ).then((response) => {
    return response.data;
  });
};

const costService = {
    getCost
};

export default costService;