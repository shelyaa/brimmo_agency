import {FeatureGrid} from "@/components/grids/FeatureGrid";
import {InfoGrid} from "@/components/grids/InfoGrid";
import {ChartSection} from "@/components/sections/ChartSection";
import {ForecastingHeaderSection} from "@/components/sections/ForecastingHeaderSection";
import {HowForecastingWorksSection} from "@/components/sections/HowForecastingWorksSection";
import {Button} from "@/components/ui/Buttons/Button";
import {Eye} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <ForecastingHeaderSection
        title="Location-Based Forecasting"
        description="Robust Rate of Sale forecasting with location-aware calculations"
      >
        <Button variant="link" icon={<Eye />}>
          View Forecast Accuracy
        </Button>
        <Button>Adjust Forecast Settings</Button>
      </ForecastingHeaderSection>

      <div className="flex gap-2 w-full flex-col lg:flex-row">
        <div>
          <FeatureGrid />
          <ChartSection />
        </div>

        <div className="w-full xl:max-w-[440px]">
          <HowForecastingWorksSection
            title="How Forecasting Works"
            description="The forecasting system has been streamlined to use the robust rate of sale method across all locations for improved consistency and reliability."
          >
            <InfoGrid />
          </HowForecastingWorksSection>
        </div>
      </div>
    </>
  );
}
