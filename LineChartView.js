import { StyleSheet, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const LineChartView = (props) => {
  const data = props.Data;
  const legend = props.legend;

  const value = data && data.length > 0 ? data[data.length - 1] : 0;
  console.log("Last Element", value);

  // Takes threshold via props
  const chartConfig = () => ({
    backgroundGradientFrom: "#f9f9f9",
    backgroundGradientTo: "#f9f9f9",

    color: (opacity = 1) => {
      return value <= props.threshold // temperature: 35,humdity: 52,moisture: 0.5,
        ? `rgba(0, 255, 0, ${opacity})` // Green
        : `rgba(255, 0, 0, ${opacity})`; // Else
    },

    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  });

  const generateChartData = () => ({
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: data || [], // Ensure data is always an array
      },
    ],
    legend: [legend], // Pass the legend as a prop
  });

  return (
    <View
      style={{
        margin: 6,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LineChart
        data={generateChartData()}
        width={330}
        height={200}
        segments={4}
        yAxisSuffix="°C"
        chartConfig={chartConfig()}
        style={{ borderWidth: 1, borderRadius: 6 }}
        bezier
      />
    </View>
  );
};

export default LineChartView;

const styles = StyleSheet.create({});
