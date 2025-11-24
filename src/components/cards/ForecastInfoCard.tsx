import type {ForecastInfoCard} from "@/mocks/cardsInfo";
import {Typography} from "../ui/Typography/Typography";
import IconButton from "../ui/Buttons/IconButton";

export function ForecastInfoCard({
  title,
  description,
  icon: Icon,
  color,
}: ForecastInfoCard) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#FFFFFFCC] p-[18px] max-w-[412px] min-h-[180px] flex-1 justify-between">
      <div className="">
        <IconButton color={color} size="sm">
          <Icon className="w-5 h-5" />
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
