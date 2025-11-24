import type { InfoCard } from "@/types.ts";
import IconButton from "../Buttons/IconButton";
import { Typography } from "../Typography/Typography";

export function InfoCard({
  title,
  description,
  icon: Icon,
  color,
}: InfoCard) {
  return (
    <div className="flex flex-col rounded-2xl bg-card p-[18px] min-h-[180px] flex-1 justify-between">
      <div>
        <IconButton color={color} size="sm" variant="static">
          <Icon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-2.5">
        <Typography variant="title" className="text-lg">
          {title}
        </Typography>
        <Typography variant="description" className="mt-auto text-xs">
          {description}
        </Typography>
      </div>
    </div>
  );
}
