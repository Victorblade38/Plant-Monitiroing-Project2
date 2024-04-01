import axios from "axios";

const fetchSensorData = async (sensortype) => {
  const url = `http://192.168.0.104:5000/${sensortype}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        `Error: Unable to fetch data from ${url}. Status code: ${response.status}`
      );
      return null;
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};

export default fetchSensorData;
