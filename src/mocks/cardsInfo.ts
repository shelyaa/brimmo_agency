import {Icon1, Icon2, Icon3, Settings, MapPin, BadgePercent} from "@/icons";
import { LucideIcon } from "lucide-react";

export interface ForecastFeatureCard {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ForecastInfoCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const FORECAST_FEATURES: ForecastFeatureCard[] = [
  {
    title: "Forecasting Method",
    subtitle: "ROBUST_ROS",
    description:
      "A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.",
    icon: Icon3,
  },
  {
    title: "Location Support",
    subtitle: "Multi-Location",
    description:
      "Each location is forecasted independently to prevent overstock and align supply with demand.",
    icon: Icon1,
  },
  {
    title: "Override Support",
    subtitle: "Available",
    description:
      "Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.",
    icon: Icon2,
  },
];

export const FORECAST_INFO: ForecastInfoCard[] = [
  {
    title: "Robust Rate of Sale",
    description:
      "Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.",
    icon: BadgePercent,
    color: "bg-blue-600/10 text-blue-600",
  },
  {
    title: "Location Awareness",
    description:
      "Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.",
    icon: MapPin,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Manual Overrides",
    description:
      "When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.",
    icon: Settings,
    color: "bg-green-600/10 text-green-600",
  },
];
