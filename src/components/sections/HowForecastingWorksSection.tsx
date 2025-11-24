import SectionEllipse from '../ui/SectionEllipse/SectionEllipse';
import { Typography } from '../ui/Typography/Typography';

interface HowForecastingWorksSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function HowForecastingWorksSection({
  title,
  description,
  children,
}: HowForecastingWorksSectionProps) {
  return (
    <section className="bg-card-feat rounded-3xl p-6 w-full relative overflow-hidden">
      <SectionEllipse
        left={50}
        bottom={10}
        width={300}
        height={250}
        color="#CEDCFF"
        blur={40}
        opacity={1}
      />

      <SectionEllipse
        right={50}
        bottom={350}
        width={100}
        height={100}
        color="#D9F7FF"
        blur={35}
        opacity={1}
      />

      <Typography variant="title" className="text-lg pb-2">
        {title}
      </Typography>
      <Typography variant="description" className="pb-5">
        {description}
      </Typography>
      <div className="relative z-20 flex items-center">{children}</div>
    </section>
  );
}
