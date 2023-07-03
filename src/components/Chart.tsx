import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: Array.from(Array(101).keys()).map((_, index) =>
              (index / 10).toFixed(1)
            ),
            datasets: [],
          },
          options: {
            scales: {
              x: {
                display: false,
              },
              y: {
                beginAtZero: true,
                max: 10,
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
