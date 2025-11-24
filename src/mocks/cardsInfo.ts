import { Icon1, Icon2, Icon3 } from '@/icons';
import { FeatureCard, InfoCard } from '@/types';
import { BadgePercent, MapPin, Settings } from 'lucide-react';

export const FORECAST_FEATURES: FeatureCard[] = [
  {
    title: 'Forecasting Method',
    subtitle: 'ROBUST_ROS',
    description:
      'A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.',
    icon: Icon3,
  },
  {
    title: 'Location Support',
    subtitle: 'Multi-Location',
    description:
      'Each location is forecasted independently to prevent overstock and align supply with demand.',
    icon: Icon1,
  },
  {
    title: 'Override Support',
    subtitle: 'Available',
    description:
      'Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.',
    icon: Icon2,
  },
];

export const FORECAST_INFO: InfoCard[] = [
  {
    title: 'Robust Rate of Sale',
    description:
      'Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.',
    icon: BadgePercent,
    color: 'bg-blue-600/10 text-blue-600',
  },
  {
    title: 'Location Awareness',
    description:
      'Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.',
    icon: MapPin,
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    title: 'Manual Overrides',
    description:
      'When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.',
    icon: Settings,
    color: 'bg-green-600/10 text-green-600',
  },
];

export const CHART_DATA = [
  { month: 'Jan', inventory: 62, demand: 74, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Feb', inventory: 44, demand: 48, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Mar', inventory: 38, demand: 38, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Apr', inventory: 52, demand: 55, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  {
    month: 'May',
    inventory: 71,
    demand: 60,
    safetyStock: 32,
    poArrival: 'Nov 15 (+120)',
  },
  { month: 'Jun', inventory: 62, demand: 57, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Jul', inventory: 48, demand: 44, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Aug', inventory: 40, demand: 38, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Sep', inventory: 53, demand: 52, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Oct', inventory: 72, demand: 66, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Nov', inventory: 64, demand: 60, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
  { month: 'Dec', inventory: 58, demand: 56, safetyStock: 32, poArrival: 'Nov 15 (+120)' },
];
