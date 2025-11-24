type TooltipPayloadItem = {
  dataKey?: string;
  value?: number | string;
  payload?: { poArrival?: string } & Record<string, unknown>;
};

interface InventoryChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}
const labelStyle = 'text-[#8d97b6] text-sm font-normal font-sans';
const valueStyle = 'text-[#323844] font-display text-[15px]';
const dotStyle = 'w-2 h-2 rounded-full';

function LegendItem({
  colorClass,
  value,
  label,
  bold,
}: {
  colorClass: string;
  value?: string | number;
  label: string;
  bold?: boolean;
}) {
  return (
    <div className="min-w-[90px]">
      <div className="flex items-center gap-1.5">
        <span className={`${dotStyle} ${colorClass}`} />
        <span className={`${valueStyle} ${bold ? 'font-bold' : 'font-semibold'} ml-0.5`}>
          {value} {label === 'Inventory' ? 'units' : ''}
        </span>
      </div>
      <div className={labelStyle}>{label}</div>
    </div>
  );
}

export default function InventoryChartTooltip({
  active,
  payload,
  label,
}: InventoryChartTooltipProps) {
  if (!active || !payload?.length) return null;

  const poArrival = payload[0]?.payload?.poArrival;
  const inventory = payload.find((item) => item.dataKey === 'inventory');
  const demand = payload.find((item) => item.dataKey === 'demand');

  return (
    <div className="bg-white rounded-2xl border border-tooltip px-6 py-4 min-w-[250px]">
      <div className={`${labelStyle} mb-2`}>{`Week of ${label} 12`}</div>

      <div className="flex items-baseline gap-4">
        <LegendItem colorClass="bg-dot-inventory" value={inventory?.value} label="Inventory" />
        <LegendItem colorClass="bg-dot-demand" value={demand?.value} label="Weekly Demand" bold />
      </div>

      <div className="h-px bg-divider my-3" />

      {poArrival && <div className={labelStyle}>PO Arrival – {poArrival}</div>}
    </div>
  );
}
