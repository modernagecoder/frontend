import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'youtube';
  url: string;
  title: string;
  date: string;
  emoji: string;
  rotation: number;
  youtubeId?: string;
}

interface Props {
  items: MediaItem[];
}

const MediaCard: React.FC<{ item: MediaItem; idx: number }> = ({ item, idx }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleYouTubeClick = () => {
    setShowYouTube(true);
  };

  return (
    <div 
      key={`${item.id}-${idx}`} 
      className="mx-6 w-80 md:w-96 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer group"
      style={{ transform: `rotate(${item.rotation}deg)` }}
    >
      {/* Polaroid/Card Body */}
      <div className="bg-white p-4 shadow-sketch-lg border-2 border-sketch-black relative">
         {/* Tape Effect */}
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/90 border border-yellow-200/60 rotate-1 shadow-sm z-10"></div>
         
         <div className="h-[280px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mb-3 border-2 border-sketch-black relative flex items-center justify-center">
           {item.type === 'image' && (
             <img 
               src={item.url} 
               alt={item.title} 
               className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-all duration-500 shadow-lg"
               style={{
                 filter: 'brightness(1.05) contrast(1.1) saturate(1.15) drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
               }}
             />
           )}
           
           {item.type === 'video' && (
             <div className="relative w-full h-full flex items-center justify-center" onClick={handleVideoClick}>
               <video 
                 ref={videoRef}
                 src={item.url}
                 className="max-w-full max-h-full w-auto h-auto object-contain mx-auto"
                 autoPlay
                 muted
                 loop
                 playsInline
                 style={{
                   filter: 'brightness(1.05) contrast(1.1) saturate(1.15)'
                 }}
               />
               <div className="absolute top-2 right-2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 {isPlaying ? (
                   <Pause fill="white" className="text-white" size={20} />
                 ) : (
                   <Play fill="white" className="text-white ml-0.5" size={20} />
                 )}
               </div>
             </div>
           )}
           
           {item.type === 'youtube' && (
             <div className="relative w-full h-full flex items-center justify-center">
               {!showYouTube ? (
                 <>
                   <img 
                     src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`} 
                     alt={item.title} 
                     className="w-full h-full object-cover"
                     style={{
                       filter: 'brightness(1.05) contrast(1.1) saturate(1.15)'
                     }}
                   />
                   <div 
                     className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                     onClick={handleYouTubeClick}
                   >
                     <div className="w-16 h-16 bg-red-600 border-2 border-sketch-black rounded-full flex items-center justify-center shadow-sketch transition-transform duration-200 group-hover:scale-110">
                       <Play fill="white" className="text-white ml-1" size={28} />
                     </div>
                   </div>
                 </>
               ) : (
                 <iframe
                   className="w-full h-full"
                   src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1`}
                   title={item.title}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 />
               )}
             </div>
           )}
         </div>
         
         {/* Caption - Inside Container */}
         <div className="text-center py-2">
           <p className="font-marker text-xl font-bold text-sketch-black">{item.title}</p>
         </div>
         
         {/* Emoji Sticker - Positioned relative to card */}
         <span className="absolute -bottom-6 -right-6 text-5xl group-hover:scale-125 transition-transform drop-shadow-lg z-20">
           {item.emoji}
         </span>
      </div>
    </div>
  );
};

const MediaSlider: React.FC<Props> = ({ items }) => {
  // Triple the items for smooth infinite loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((item, idx) => (
          <MediaCard key={`${item.id}-${idx}`} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;
