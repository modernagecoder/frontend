import React, { useState } from 'react';
import { VideoReview } from '../types';

interface Props {
  data: VideoReview;
}

const VideoCard: React.FC<Props> = React.memo(({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className="group relative cursor-pointer">
      {/* Background Offset decoration */}
      <div className="absolute inset-0 bg-sketch-black translate-x-2 translate-y-2 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
      
      {/* Main Content */}
      <div className="relative bg-white border-2 border-sketch-black rounded-xl overflow-hidden">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-pop-yellow to-pop-cyan">
          {!showVideo ? (
            <div onClick={() => setShowVideo(true)}>
              <img 
                src={`https://img.youtube.com/vi/${data.youtubeId}/hqdefault.jpg`}
                alt={data.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://img.youtube.com/vi/${data.youtubeId}/mqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 border-2 border-sketch-black rounded-full flex items-center justify-center shadow-sketch transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black text-white text-xs font-bold px-1.5 py-0.5 rounded">
                {data.duration}
              </span>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data.youtubeId}?autoplay=1`}
              title={data.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        
        <div className="p-3">
            <h3 className="font-sans font-bold text-lg leading-tight group-hover:text-pop-purple transition-colors">{data.title}</h3>
            <p className="font-hand text-gray-600 mt-1">by {data.author}</p>
        </div>
      </div>
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

export default VideoCard;