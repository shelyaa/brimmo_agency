import { LucideIcon } from "lucide-react";

export interface FeatureCard {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface InfoCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}
