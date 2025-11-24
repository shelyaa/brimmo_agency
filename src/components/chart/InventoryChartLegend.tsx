export default function InventoryChartLegend() {
  return (
    <div className="flex flex-wrap gap-4 items-center px-2 pb-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-1 bg-primary-dark" />
        <span className="text-xs text-gray-900 font-normal">
          Projected Inventory
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-2.5 h-1 bg-primary-light" />
        <span className="text-xs text-gray-900 font-normal">Demand</span>
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-5 h-2" viewBox="0 0 20 8" fill="none">
          <line
            x1="0"
            y1="4"
            x2="20"
            y2="4"
            className="stroke-success stroke-2"
            strokeDasharray="2"
          />
        </svg>
        <span className="text-xs text-gray-900 font-normal">
          Safety Stock Level
        </span>
      </div>
    </div>
  );
}
