import type { InfoCard } from '@/types';
import { Typography } from '../Typography/Typography';

export function InfoCard({ title, description, icon: Icon, color }: InfoCard) {
  return (
    <div className="flex flex-col rounded-2xl bg-card p-[18px] flex-1 justify-between">
      <div className={`rounded-full flex items-center justify-center ${color} w-10 h-10 mb-6`}>
        <Icon size={20} />
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="title" className="text-lg">
          {title}
        </Typography>
        <Typography variant="description" className="mt-auto text-xs">
          {description}
        </Typography>
      </div>
    </div>
  );
}
