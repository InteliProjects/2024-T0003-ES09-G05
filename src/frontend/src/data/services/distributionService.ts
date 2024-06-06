import axios from "axios";

const API_URL = import.meta.env.VITE_API;

const DistributionService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/distribution`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getById: async (id: number) => {
    try {
      const response = await axios.get(`${API_URL}/distribution/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  create: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/distribution`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export default DistributionService;
