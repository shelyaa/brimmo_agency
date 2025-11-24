type TooltipPayloadItem = {
  dataKey?: string;
  value?: number | string;
  payload?: {poArrival?: string} & Record<string, unknown>;
};

interface InventoryChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}

export default function InventoryChartTooltip({
  active,
  payload,
  label,
}: InventoryChartTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const poArrival = payload[0]?.payload?.poArrival;
  const inventory = payload.find((item) => item.dataKey === "inventory");
  const demand = payload.find((item) => item.dataKey === "demand");

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(30,38,61,0.08)] border border-[#eef0f3] px-6 py-4 min-w-[250px]">
      <div className="text-[#8d97b6] text-sm font-normal mb-2 font-sans">
        {`Week of ${label} 12`}
      </div>

      <div className="flex items-baseline gap-4">
        <div className="min-w-[90px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8d97b6]" />
            <span className="text-[#323844] font-semibold text-[15px] font-display ml-0.5">
              {inventory?.value} units
            </span>
          </div>
          <div className="text-sm text-[#8d97b6] font-sans">Inventory</div>
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#87B1F7]" />
            <span className="text-[#323844] font-bold text-[15px] font-display ml-0.5">
              {demand?.value}
            </span>
          </div>
          <div className="text-sm text-[#8d97b6] font-sans">Weekly Demand</div>
        </div>
      </div>

      <div className="h-px bg-[#eaeef3] my-3" />

      {poArrival && (
        <div className="text-[#8d97b6] text-sm font-normal font-sans">
          PO Arrival – {poArrival}
        </div>
      )}
    </div>
  );
}
