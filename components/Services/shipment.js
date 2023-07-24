import axios from "axios";
import { apiHost } from "@/components/Utils/host.js";

const getZipCode = (value) => {
  return axios.get(`${apiHost}/uszip/${value}`).then((response) => {
    return response.data;
  });
};

const shipmentService = {
    getZipCode
};

export default shipmentService;