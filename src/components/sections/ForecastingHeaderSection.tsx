import React from "react";
import {Typography} from "../ui/Typography/Typography";

interface ForecastingHeaderSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function ForecastingHeaderSection({
  title,
  description,
  children,
}: ForecastingHeaderSectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-2 rounded-3xl mb-6">
      <div className="flex flex-col gap-2">
        <Typography variant="title" className="text-4xl">{title}</Typography>
        <Typography variant="description">{description}</Typography>
      </div>
      {children && <div className="mt-4 md:mt-0 flex gap-4">{children}</div>}
    </section>
  );
}
