import axios from "axios";

const API_URL = import.meta.env.VITE_API;

const ResearchService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/research`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getById: async (id: number) => {
    try {
      const response = await axios.get(`${API_URL}/research/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  create: async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/research`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  update: async (data: any) => {
    try {
      const response = await axios.put(`${API_URL}/research`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export default ResearchService;
