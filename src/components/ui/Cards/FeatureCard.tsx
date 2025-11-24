import type { FeatureCard } from "@/types.ts";
import { Typography } from "../Typography/Typography";

export function FeatureCard({
  title,
  subtitle,
  description,
  icon: Icon,
}: FeatureCard) {
  return (
    <div className="flex flex-col rounded-2xl bg-card-feat p-5 pl-[18px] min-w-[280px] min-h-[180px]">
      <div className="flex justify-between items-start">
        <div> 
          <Typography variant="label">{title}</Typography>
          <Typography variant="title">{subtitle}</Typography>
        </div>
        <div>
          <Icon className="w-10 h-10" />
        </div>
      </div>
      <Typography variant="description" className="mt-auto">
        {description}
      </Typography>
    </div>
  );
}
