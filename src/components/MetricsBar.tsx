import React from 'react';
import { Calendar, Users, ShieldCheck, Star, Lock } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Calendar,
      value: '17+',
      label: 'Years Experience'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Clients'
    },
    {
      icon: ShieldCheck,
      value: '98%',
      label: 'Accuracy & Trust'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Google Rating'
    },
    {
      icon: Lock,
      value: '100%',
      label: 'Private & Confidential'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#2c1d13] via-[#3d2719] to-[#25170e] text-[#f2e6d6] py-5 border-y border-[#543b27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#543b27]/60">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-3 py-2 sm:py-0 ${index > 0 ? 'sm:pl-4' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#4a3120] border border-[#d49b54]/40 flex items-center justify-center flex-shrink-0 text-[#e6af6c]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg sm:text-xl text-[#fbebd6] tracking-tight leading-none">
                    {item.value}
                  </span>
                  <span className="text-xs text-[#c9ab8d] font-medium mt-1 leading-tight">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
