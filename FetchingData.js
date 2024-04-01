import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import LineChartView from "./LineChartView";
import fetchSensorData from "./fetchSensorData";
import { ScrollView } from "react-native";

const FetchingData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: [10, 10, 10, 10, 10],
    humidity: [10, 10, 10, 10, 10],
    moisture: [10, 10, 10, 10, 10],
  });
  let i = 0;

  useEffect(() => {
    const fetchDataInterval = setInterval(() => {
      if (i < 50) {
        fetchData();
        i++;
      } else {
        console.log("Out of limit");
        clearInterval(fetchDataInterval);
      }
    }, 2000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  const fetchData = async () => {
    try {
      const newData = await fetchSensorData("sensor_data");
      console.log(newData, "Sensor Data");
      if (newData && newData.length >= 3) {
        setSensorData({
          temperature: newData[0],
          humidity: newData[1],
          moisture: newData[2],
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 330,
            borderRadius: 6,
            backgroundColor: "blue",
            marginTop: 40,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20, color: "white" }}>
            PlantName
          </Text>
        </View>
        {Object.entries(sensorData).map(([key, data]) => (
          <LineChartView
            key={key}
            Data={data}
            legend={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FetchingData;
