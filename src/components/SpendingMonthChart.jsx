import { ArrowRight, ArrowRightIcon, EllipsisIcon } from "lucide-react";
import React from "react";
import Chart from "react-apexcharts";

export default function SpendingMonthChart() {
  const spent = 2000;
  const budget = 4000;
  const percentage = (spent / budget) * 100;

  const options = {
    labels: ["Spent"],
    chart: {
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        track: {
          background: "var(--color-surface-raised)",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "15px",
            color: "var(--color-text-1)",
            fontFamily: "--font-lifesavers",
          },
          value: {
            show: true,
            fontSize: "26px",
            fontWeight: 400,
            fontFamily: "--font-lifesavers",
            color: "var(--color-text-1)",
            formatter: () => `$${spent.toLocaleString()}`,
          },
        },
      },
    },
    fill: {
      colors: ["var(--radial-color-chart-1)"], // or "var(--color-chart-1)" if your CSS variable resolves correctly
    },
    stroke: {
      lineCap: "round",
    },
  };

  const series = [percentage];

  return (
    <>
      <div className="w-full max-w-xs mx-auto bg-gray-400 rounded-[10px] shadow-md mt-10 h-full flex flex-col items-center justify-center">
        <div className="pt-5 pl-5 justify-between flex w-full">
          <h2 className="text-[16px] text-white mb-1.5">Monthly Budget</h2>
          <ArrowRightIcon
            className="mr-6 lg:cursor-pointer"
            onClick={() => console.log("clicked")}
          />
        </div>
        <h2 className="text-[16px] text-white self-start pl-5">$4000</h2>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={250}
        />
        <button className="btn btn-sm text-[14px] text-gray-300 mr-5 hover:bg-gray-500 hover:text-white self-end mb-5">
          <EllipsisIcon />
        </button>
      </div>
    </>
  );
}
