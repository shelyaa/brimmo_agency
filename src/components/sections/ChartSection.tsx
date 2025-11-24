'use client';

import { Typography } from '../ui/Typography/Typography';
import InventoryChartLegend from '../chart/InventoryChartLegend';
import { Chart } from '../chart/Chart';

export function ChartSection() {
  return (
    <section className="w-full flex justify-center my-2">
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
        <Chart />
      </div>
    </section>
  );
}
