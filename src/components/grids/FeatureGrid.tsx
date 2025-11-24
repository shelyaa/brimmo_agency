import {FORECAST_FEATURES} from "@/mocks/cardsInfo";
import { FeatureCard } from "../ui/Cards/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1  xl:grid-cols-3 gap-2">
      {FORECAST_FEATURES.map((feature) => (
        <FeatureCard key={feature.subtitle} {...feature} />
      ))}
    </div>
  );
};
