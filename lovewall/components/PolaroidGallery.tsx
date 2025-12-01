import React from 'react';
import { GalleryItem } from '../types';
import { Pin } from 'lucide-react';

interface Props {
  items: GalleryItem[];
}

const PolaroidGallery: React.FC<Props> = ({ items }) => {
  // Triple the items for smooth infinite loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
        {marqueeItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="relative mx-6 w-64 md:w-80 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer"
            style={{ transform: `rotate(${item.rotation}deg)` }}
          >
            {/* Polaroid Body */}
            <div className="bg-white p-4 pb-16 shadow-sketch-lg border border-gray-200">
               <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                 <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
               </div>
               
               {/* Handwritten text */}
               <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                 <p className="font-hand text-xl font-bold text-sketch-black rotate-[-1deg]">{item.caption}</p>
                 <p className="font-marker text-sm text-pop-pink mt-1">{item.studentName}</p>
               </div>
            </div>

            {/* Pin Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 drop-shadow-md">
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white/50 shadow-inner flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-300 rounded-full"></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolaroidGallery;