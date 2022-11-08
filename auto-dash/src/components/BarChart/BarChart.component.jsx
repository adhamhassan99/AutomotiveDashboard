import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: "Chart.js Bar Chart",
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
      label: "",
      data: [100, 200, 50, 700, 1000, 400, 600],
      backgroundColor: "#2884FF",
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
