import axios from "axios";

const commonAPI = async (method, url, data) => {
  try {
    const config = {
      method,
      url,
      data
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default commonAPI;



