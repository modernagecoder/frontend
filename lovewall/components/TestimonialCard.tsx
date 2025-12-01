import React from 'react';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

interface Props {
  data: Testimonial;
  rotate?: number;
}

const TestimonialCard: React.FC<Props> = React.memo(({ data, rotate = 0 }) => {
  return (
    <div 
      className={`relative p-6 border-2 border-sketch-black bg-white shadow-sketch hover:shadow-sketch-hover transition-all duration-300 hover:z-10 hover:scale-105 flex flex-col justify-between h-full`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/90 border border-yellow-200/60 shadow-sm rotate-2 z-20"></div>

      <div>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-full border-2 border-sketch-black overflow-hidden flex-shrink-0 ${data.color}`}>
            <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <div className="flex text-pop-yellow drop-shadow-sm">
             {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-pop-yellow stroke-black stroke-1" />)}
          </div>
        </div>

        <Quote className="text-gray-300 mb-2 w-8 h-8 opacity-50" />
        <p className="font-hand text-xl leading-relaxed text-gray-800 mb-4">
          {data.text}
        </p>
      </div>

      <div className="mt-auto border-t-2 border-dashed border-gray-200 pt-3">
        <h4 className="font-marker text-lg">{data.name}</h4>
        <p className="font-sans text-xs uppercase tracking-wider font-bold text-gray-500">{data.role}</p>
        <span className={`inline-block mt-2 text-xs font-bold px-2 py-0.5 border border-sketch-black rounded-full ${data.color}`}>
          {data.course}
        </span>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;