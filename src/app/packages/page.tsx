import {ForecastFeatureGrid} from "@/components/grids/ForecastFeatureGrid";
import {ForecastInfoGrid} from "@/components/grids/ForecastInfoGrid";
import {ForecastingHeaderSection} from "@/components/sections/ForecastingHeaderSection";
import {HowForecastingWorksSection} from "@/components/sections/HowForecastingWorksSection";
import ForecastButton from "@/components/ui/Buttons/ForecastButton";
import {Eye} from "@/icons";

export default function Packages() {
  return (
    <div>
      <ForecastingHeaderSection
        title="Location-Based Forecasting"
        description="Robust Rate of Sale forecasting with location-aware calculations"
      >
        <ForecastButton variant="link" icon={<Eye />}>
          View Forecast Accuracy
        </ForecastButton>
        <ForecastButton>Adjust Forecast Settings</ForecastButton>
      </ForecastingHeaderSection>
      <div className="flex gap-2 w-full">
        <div>
          <ForecastFeatureGrid />
        </div>

        <div className="min-w-[440px]">
          <HowForecastingWorksSection
            title="How Forecasting Works"
            description="The forecasting system has been streamlined to use the robust rate of sale method across all locations for improved consistency and reliability."
          >
            <ForecastInfoGrid />
          </HowForecastingWorksSection>
        </div>
      </div>
    </div>
  );
}
