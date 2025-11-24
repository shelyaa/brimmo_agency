import type { ForecastFeatureCard } from "@/mocks/cardsInfo";
import { Typography } from "../ui/Typography/Typography";

export function ForecastFeatureCard({
  title,
  subtitle,
  description,
  icon: Icon,
}: ForecastFeatureCard) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#f4f7fb] p-5 pl-[18px] min-w-[220px] min-h-[180px] flex-1">
      <div className="flex justify-between items-start">
        <div>
          <Typography variant="label">{title}</Typography>
          <Typography variant="title">{subtitle}</Typography>
        </div>
        <div className="ml-2">
          <Icon className="w-10 h-10" />
        </div>
      </div>
      <Typography variant="description" className="mt-auto">
        {description}
      </Typography>
    </div>
  );
}
