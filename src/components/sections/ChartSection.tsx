"use client";

import {CHART_DATA} from "@/mocks/cardsInfo";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import {Typography} from "../ui/Typography/Typography";
import InventoryChartLegend from "../chart/InventoryChartLegend";
import InventoryChartTooltip from "../chart/InventoryChartTooltip";

export function ChartSection() {
  return (
    <section className="w-full flex justify-center my-2 ">
      <div className="w-full  bg-white rounded-3xl  px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <div className="mb-4">
            <Typography variant="title" className="text-lg">
              Inventory Coverage (90 days)
            </Typography>
            <Typography variant="description">
              Optimized inventory projections with upcoming POs
            </Typography>
          </div>
          <InventoryChartLegend />
        </div>

        <div className="w-full aspect-video">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={CHART_DATA}
              margin={{top: 20, right: 10, left: -20, bottom: 20}}
            >
              <CartesianGrid stroke="#eaf0f5" vertical={false} />
              <defs>
                <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2362ff" stopOpacity={0.4} />
                  <stop offset="70%" stopColor="#2362ff" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#2362ff" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="demand"
                stroke="none"
                fill="url(#demandGradient)"
                isAnimationActive={false}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                tick={{
                  fontFamily: "Open Sans, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  fill: "rgba(7, 20, 41, 0.5)",
                }}
              />
              <YAxis
                tickLine={false}
                domain={[0, 100]}
                axisLine={false}
                tick={{
                  fontFamily: "Open Sans, Arial, sans-serif",
                  fontWeight: 400,

                  fontSize: 12,
                  fill: "rgba(7, 20, 41, 0.5)",
                }}
              />

              <Tooltip content={<InventoryChartTooltip />} />
              <Line
                type="monotone"
                dataKey="inventory"
                stroke="#323844"
                strokeWidth={2}
                name="Projected Inventory"
                activeDot={{r: 6}}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="demand"
                stroke="#2362ff"
                strokeWidth={2}
                name="Demand"
                activeDot={{r: 6}}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="safetyStock"
                stroke="#44d08c"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                name="Safety Stock Level"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
