import axios from "axios";
import { apiHost } from "@/components/Utils/host.js";

const getYearsForVehicle = () => {
  return axios.get(`${apiHost}/vehicle/getYears`).then((response) => {
    return response.data;
  });
};
const getNameForVehicle = () => {
  return axios.get(`${apiHost}/vehicle/getBrands`).then((response) => {
    return response.data;
  });
};
const getModalForVehicle = (year, name) => {

  return axios.get(`${apiHost}/vehicle/getModels?year=${year}&brand=${name}`).then((response) => {
    return response.data;
  });
};
const vehicleService = {
  getYearsForVehicle,
  getNameForVehicle,
  getModalForVehicle
};

export default vehicleService;