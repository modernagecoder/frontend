import React, { useState } from 'react';
import { Menu, X, Heart, Code, Calculator, ArrowRight, Youtube, Star, Zap, MapPin, Award } from 'lucide-react';
import { TESTIMONIALS, VIDEO_REVIEWS, CERTIFICATES_DATA, MEETUP_MEDIA } from './constants';
import TestimonialCard from './components/TestimonialCard';
import VideoCard from './components/VideoCard';
import SketchButton from './components/SketchButton';
import LoveRain from './components/LoveRain';
import MediaSlider from './components/MediaSlider';
import { CourseType } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState<CourseType | 'All'>('All');

  // Duplicate testimonials for marquee effect
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];
  // Reverse for the second row, shift it a bit
  const marqueeItemsReverse = [...TESTIMONIALS.reverse(), ...TESTIMONIALS];

  const filteredTestimonials = filter === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.course === filter);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-pop-pink selection:text-white font-sans">
      
      {/* 🌧️ LOVE RAIN EFFECT (Starts on load, stops after 10s) */}
      <LoveRain />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b-2 border-sketch-black z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="https://learn.modernagecoders.com" className="flex items-center gap-3 group cursor-pointer">
               <img src="/images/logo.svg" alt="Modern Age Coders" className="h-12 w-auto group-hover:scale-110 transition-transform" />
               <span className="font-marker text-2xl tracking-wide group-hover:text-pop-purple transition-colors">Modern Age Coders</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="https://learn.modernagecoders.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-lg hover:text-pop-purple transition-colors text-sketch-black"
              >
                Courses
              </a>
              <a 
                href="https://learn.modernagecoders.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-lg hover:text-pop-purple transition-colors text-sketch-black"
              >
                Pricing
              </a>
              <a href="https://learn.modernagecoders.com/contact" target="_blank" rel="noopener noreferrer">
                <SketchButton variant="primary" className="text-sm">
                  Join Now
                </SketchButton>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-transparent hover:border-sketch-black rounded-md">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-sketch-black bg-white absolute w-full left-0 shadow-sketch-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a 
                href="https://learn.modernagecoders.com/course"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 font-marker text-xl text-sketch-black hover:bg-pop-yellow rounded-md border-2 border-transparent hover:border-sketch-black transition-all"
              >
                Courses
              </a>
              <a 
                href="https://learn.modernagecoders.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 font-marker text-xl text-sketch-black hover:bg-pop-yellow rounded-md border-2 border-transparent hover:border-sketch-black transition-all"
              >
                Pricing
              </a>
              <div className="pt-4">
                <a href="https://learn.modernagecoders.com/contact" target="_blank" rel="noopener noreferrer" className="block">
                  <SketchButton className="w-full">Join Now</SketchButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
          {/* Background Doodles */}
          <div className="absolute top-20 right-10 opacity-20 rotate-12 animate-pulse pointer-events-none">
             <Calculator size={120} />
          </div>
          <div className="absolute bottom-20 left-10 opacity-20 -rotate-12 animate-bounce pointer-events-none">
             <Heart size={120} />
          </div>
          <div className="absolute top-40 left-20 opacity-20 rotate-45 pointer-events-none">
             <Zap size={80} className="text-pop-yellow" fill="currentColor" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-6 py-2 bg-pop-cyan border-2 border-sketch-black -rotate-2 shadow-sketch hover:rotate-2 transition-transform cursor-default">
              <span className="font-bold font-sans tracking-widest uppercase flex items-center gap-2 text-sketch-black">
                <Star size={16} fill="black" /> Trusted by 500+ Families <Star size={16} fill="black" />
              </span>
            </div>
            <h1 className="font-marker text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] drop-shadow-sm">
              Wall of <br/>
              <span className="text-pop-pink inline-block relative px-2 sm:px-4">
                LOVE
                <span className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-3xl sm:text-4xl animate-bounce">❤️</span>
                <svg className="absolute -bottom-2 left-0 w-full h-6 text-sketch-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="font-hand text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Real stories from our future tech leaders. 
              <span className="bg-pop-yellow px-2 mx-1 border border-black inline-block -rotate-1">Juicy</span> details, 
              <span className="bg-pop-cyan px-2 mx-1 border border-black inline-block rotate-1">vibey</span> photos, and 
              <span className="bg-pop-pink text-white px-2 mx-1 border border-black inline-block -rotate-2">100% real</span> smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
               <a href="https://learn.modernagecoders.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                 <SketchButton className="text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 bg-pop-pink text-sketch-black hover:text-sketch-black w-full sm:w-auto">Add Your Story ✍️</SketchButton>
               </a>
               <a href="https://www.youtube.com/@modernagecoders" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                 <SketchButton variant="outline" className="text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 bg-white w-full sm:w-auto">Watch Reviews 🍿</SketchButton>
               </a>
            </div>
          </div>
        </section>

        {/* DOUBLE SLIDING MARQUEE */}
        <div className="space-y-16 py-10 overflow-hidden bg-pop-yellow border-y-4 border-sketch-black">
          {/* Row 1: Left to Right */}
          <section className="relative rotate-1 scale-105 transform origin-center">
             <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
                {marqueeItems.map((item, idx) => (
                  <div key={`m1-${item.id}-${idx}`} className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 md:mx-6">
                    <TestimonialCard data={item} rotate={idx % 2 === 0 ? 1 : -1} />
                  </div>
                ))}
             </div>
          </section>
          
          {/* Row 2: Right to Left */}
          <section className="relative -rotate-1 scale-105 transform origin-center">
             <div className="flex w-[200%] animate-marquee-reverse hover:[animation-play-state:paused]">
                {marqueeItemsReverse.map((item, idx) => (
                  <div key={`m2-${item.id}-${idx}`} className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 md:mx-6">
                    <TestimonialCard data={item} rotate={idx % 2 === 0 ? -1 : 1} />
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* STUDENT MEETUPS & MASTI */}
        <section id="meetups" className="py-24 bg-white border-b-4 border-sketch-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
          
          <div className="text-center mb-4 relative z-10">
             <span className="bg-pop-purple text-white px-4 py-2 font-marker text-xl rotate-[-2deg] inline-block border-2 border-black shadow-sketch mb-4">
                Beyond the Code 🚀
             </span>
             <h2 className="font-marker text-5xl md:text-7xl mt-4">Student Meetups & Masti 🎉</h2>
             <p className="font-hand text-2xl mt-2 text-gray-600">Photos, Reels & Fun Moments!</p>
          </div>

          <MediaSlider items={MEETUP_MEDIA} />
          
          <div className="text-center mt-8">
            <p className="font-hand text-2xl animate-pulse text-pop-pink font-bold">← Slide to see more awesomeness →</p>
          </div>
        </section>

        {/* CERTIFICATES DISTRIBUTION */}
        <section className="py-24 bg-pop-pink/10 border-b-4 border-sketch-black px-4">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                 <div className="text-center md:text-left mb-8 md:mb-0">
                   <h2 className="font-marker text-5xl md:text-6xl text-sketch-black">Graduation Day 🎓</h2>
                   <p className="font-hand text-2xl mt-2 text-gray-700 max-w-2xl italic">
                     "The only certificate which cannot be given, only earned."
                   </p>
                 </div>
                 <a href="https://learn.modernagecoders.com/course" target="_blank" rel="noopener noreferrer">
                   <SketchButton className="bg-white hover:bg-pop-yellow">Get Certified 🏅</SketchButton>
                 </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {CERTIFICATES_DATA.map((cert, i) => (
                  <div key={cert.id} className="group relative">
                     {/* Fancy Frame Border */}
                     <div className="absolute inset-0 border-[6px] border-double border-yellow-500 rounded-lg transform translate-x-1 translate-y-1 bg-white"></div>
                     <div className="relative bg-white p-2 border-2 border-sketch-black rounded-lg shadow-sketch transition-transform hover:-translate-y-2 hover:shadow-sketch-lg">
                        <div className="aspect-[3/4] overflow-hidden rounded border border-gray-200 relative bg-gray-100">
                          {cert.type === 'image' ? (
                            <img src={cert.imageUrl} alt={cert.studentName} className="w-full h-full object-cover" />
                          ) : (
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${cert.youtubeId}`}
                              title={cert.studentName}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          )}
                        </div>
                        <div className="mt-3 text-center">
                          <p className="font-marker text-lg leading-none">{cert.studentName}</p>
                          <p className="font-sans text-xs text-gray-500 font-bold mt-1 uppercase">{cert.course}</p>
                          <Award className="w-6 h-6 text-yellow-500 mx-auto mt-2" fill="currentColor" />
                        </div>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* VIDEO TESTIMONIALS */}
        <section className="py-24 px-4 bg-sketch-white relative">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
               <div className="text-center md:text-left">
                  <h2 className="font-marker text-5xl md:text-6xl text-sketch-black relative inline-block">
                    Video Vibes
                    <svg className="absolute -top-6 -right-8 w-12 h-12 text-pop-cyan animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z" fill="currentColor"/>
                    </svg>
                  </h2>
                  <p className="font-hand text-2xl mt-4 text-gray-600 max-w-md">
                    Unfiltered, unscripted, and totally adorable reviews from our coding rockstars.
                  </p>
               </div>
               <a href="https://www.youtube.com/@modernagecoders?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-white p-4 border-2 border-sketch-black rotate-2 shadow-sketch hover:shadow-sketch-hover hover:scale-105 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                      <Youtube size={24} fill="white" />
                    </div>
                    <div>
                      <p className="font-bold font-sans text-lg">Subscribe</p>
                      <p className="text-xs text-gray-500">For more cool projects</p>
                    </div>
                 </div>
               </a>
             </div>

             {/* Scrolling Video Slider */}
             <div className="w-full overflow-hidden">
               <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                 {[...VIDEO_REVIEWS, ...VIDEO_REVIEWS, ...VIDEO_REVIEWS].map((video, idx) => (
                   <div key={`${video.id}-${idx}`} className={`mx-4 w-80 md:w-96 flex-shrink-0 transform transition-all duration-300 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 hover:scale-105 hover:z-20`}>
                     <VideoCard data={video} />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* DETAILED FEEDBACK GRID */}
        <section className="py-24 px-4 bg-pop-cyan/10 border-t-4 border-dashed border-sketch-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-marker text-5xl md:text-7xl mb-8">All The Love 💌</h2>
               
               {/* Filters */}
               <div className="flex flex-wrap justify-center gap-4">
                 {(['All', CourseType.CODING, CourseType.MATH] as const).map((type) => (
                   <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`font-sans font-bold text-lg px-8 py-3 border-2 border-sketch-black rounded-lg transition-all transform hover:-translate-y-1 ${filter === type ? 'bg-pop-pink text-white shadow-sketch' : 'bg-white hover:bg-gray-50 hover:shadow-sketch'}`}
                   >
                     {type}
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
               {filteredTestimonials.map((t, i) => (
                 <div key={t.id} className={`${i % 2 === 0 ? 'md:translate-y-8' : ''}`}>
                    <TestimonialCard data={t} rotate={i % 3 === 0 ? 2 : (i % 3 === 1 ? -2 : 0)} />
                 </div>
               ))}
            </div>

            <div className="mt-32 text-center">
              <SketchButton variant="secondary" className="text-2xl px-12 py-6 bg-white border-dashed border-2 hover:border-solid hover:bg-pop-yellow">
                Load More Juicy Feedback 🍋
              </SketchButton>
            </div>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="py-32 px-4 bg-pop-purple border-t-4 border-sketch-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="absolute top-10 left-10 animate-bounce">
             <Star size={60} className="text-pop-yellow" fill="currentColor" />
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce delay-700">
             <Heart size={60} className="text-pop-pink" fill="currentColor" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-marker text-6xl md:text-8xl mb-8 leading-[0.9] drop-shadow-lg">
              Ready to Start <br/> Your Journey?
            </h2>
            <p className="font-sans text-xl md:text-3xl mb-12 max-w-2xl mx-auto opacity-90 leading-normal font-medium">
              Join the coolest community of young coders and math wizards. 
              <br/>Book a free trial class today!
            </p>
            <a href="https://learn.modernagecoders.com/contact" target="_blank" rel="noopener noreferrer" className="px-4">
              <button className="group bg-white text-sketch-black font-marker text-xl sm:text-2xl md:text-3xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border-4 border-sketch-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-200 flex items-center gap-3 sm:gap-4 mx-auto rounded-xl w-full sm:w-auto justify-center">
                Get Started for Free
                <ArrowRight size={24} className="sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-sketch-black text-white py-16 px-4 border-t-8 border-pop-yellow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start gap-4">
               <div className="flex items-center gap-3">
                  <img src="/images/logo.svg" alt="Modern Age Coders" className="h-12 w-auto" />
                  <span className="font-marker text-3xl">Modern Age Coders</span>
               </div>
               <p className="font-hand text-gray-400 text-lg max-w-xs text-center md:text-left">
                 Making coding and math magical for everyone. ✨
               </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.youtube.com/@modernagecoders" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white"
              >
                <Youtube size={28} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/modern_age_coders?igshid=MzNlNGNkZWQ4Mg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white"
              >
                 <Heart size={28} className="group-hover:scale-110 transition-transform" fill="currentColor" />
              </a>
            </div>

            <div className="font-sans text-gray-500 text-sm">
              © {new Date().getFullYear()} Modern Age Coders. Made with <Heart className="inline w-4 h-4 text-pop-pink animate-pulse" fill="currentColor" /> and Code.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;