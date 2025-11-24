import {FORECAST_FEATURES} from "@/mocks/cardsInfo";
import {ForecastFeatureCard} from "../cards/ForecastFeatureCard";

export const ForecastFeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {FORECAST_FEATURES.map((feature) => (
        <ForecastFeatureCard key={feature.subtitle} {...feature} />
      ))}
    </div>
  );
};
