import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = ["1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "",
      data: [100, 2000, 150, 519, 50, 750, 1260],
      borderColor: "#FF764C",
      backgroundColor: "#ff764c65",
    },
  ],
};
const LineAreaChart = () => {
  return <Line options={options} data={data} />;
};

export default LineAreaChart;
