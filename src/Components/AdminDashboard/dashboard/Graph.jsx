import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [options] = useState({
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ['#0f430f'],
    plotOptions: {
      bar: {
        // borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' ' +'Cients';
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["red"],
      },
    },
    xaxis: {
      categories: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        },
      },
    },
    title: {
      text: "Number of Cliens this Week",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#555",
      },
    },
  });

  const [series] = useState([
    {
      name: "Clients",
      data: [2, 3, 4, 9, 4, 3, 3],
    },
  ]);

  return (
    <div>
      <div className="bg-[#0d0d0d] py-10 rounded-lg" id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
