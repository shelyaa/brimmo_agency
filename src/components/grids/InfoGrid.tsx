import {FORECAST_INFO} from "@/mocks/cardsInfo";
import { InfoCard } from "../ui/Cards/InfoCard";

export const InfoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {FORECAST_INFO.map((info) => (
        <InfoCard key={info.title} {...info} />
      ))}
    </div>
  );
};
