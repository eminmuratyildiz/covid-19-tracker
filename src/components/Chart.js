import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart() {
  const [data] = useState({
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "US",
        data: [1, 3, 0, 2],
      },
    ],
  });
  return (
    <div className="my-10 flex flex-col items-center gap-y-5">
      <select className="w-1/5 shadow outline-none">
        <option>US</option>
      </select>
      <div className="w-full h-[500px] border">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default Chart;
