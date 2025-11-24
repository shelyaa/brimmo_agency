import {FORECAST_INFO} from "@/mocks/cardsInfo";
import {ForecastInfoCard} from "../cards/ForecastInfoCard";

export const ForecastInfoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {FORECAST_INFO.map((info) => (
        <ForecastInfoCard key={info.title} {...info} />
      ))}
    </div>
  );
};
