import { CHART_DATA } from '@/mocks/cardsInfo';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import InventoryChartTooltip from './InventoryChartTooltip';

const styles = {
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  fill: 'rgba(7, 20, 41, 0.5)',
};

export function Chart() {
  return (
    <div className="w-full aspect-video">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={CHART_DATA} margin={{ left: -25, top:20 }}>
          <CartesianGrid stroke="#eaf0f5" vertical={false} />

          <XAxis dataKey="month" tickLine={false} tick={{ ...styles }} />
          <YAxis tickLine={false} domain={[0, 100]} axisLine={false} tick={{ ...styles }} />

          <Tooltip content={<InventoryChartTooltip />} />
          <Line
            type="monotone"
            dataKey="inventory"
            stroke="#323844"
            strokeWidth={2}
            name="Projected Inventory"
            activeDot={{ r: 6 }}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="demand"
            stroke="#2362ff"
            strokeWidth={2}
            name="Demand"
            activeDot={{ r: 6 }}
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
  );
}
