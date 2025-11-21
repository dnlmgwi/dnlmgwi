import React, { useState, useRef, useEffect } from 'react';
import type { HeroVideoConfig } from '../types';
import { Play, Pause, ArrowRight } from 'iconoir-react';

interface VideoHeroProps {
  config: HeroVideoConfig;
  onSeeWorks: () => void;
}

const SeeMyWorksButton: React.FC<{ className?: string; onClick?: () => void }> = ({ className, onClick }) => (
  <button onClick={onClick} className={`flex items-center gap-2 bg-brand-green hover:brightness-90 transition-all text-black font-semibold py-3 px-6 rounded-full ${className}`}>
    <div className="bg-black/20 rounded-full p-1">
      <ArrowRight color="black" width={20} height={20} />
    </div>
    <span>See my works</span>
  </button>
);

const VideoHero: React.FC<VideoHeroProps> = ({ config, onSeeWorks }) => {
  const { videoUrl, posterUrl } = config;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isManuallyPaused = useRef(false);

  const safePlay = async (video: HTMLVideoElement) => {
    try {
      await video.play();
      isManuallyPaused.current = false;
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error("Error attempting to play video:", error);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentVideo = videoRef.current;
        if (!currentVideo) return;

        if (entry.isIntersecting) {
          if (!isManuallyPaused.current && currentVideo.paused) {
            safePlay(currentVideo);
          }
        } else {
          if (!currentVideo.paused) {
            currentVideo.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      safePlay(video);
    } else {
      video.pause();
      isManuallyPaused.current = true;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center text-white group rounded-3xl">
      {/* Z-0: Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          poster={posterUrl}
          muted
          loop
          playsInline
          autoPlay
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-label="Promotional video playing in the background"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <h2 className="absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2 font-black text-white leading-none whitespace-nowrap opacity-20 backdrop-blur-md group-hover:opacity-0 transition-opacity duration-500" style={{ fontSize: 'clamp(220px, 30vw, 550px)', letterSpacing: '-0.05em' }}>
          Daniel
        </h2>
      </div>

      {/* Z-10: Foreground Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 p-6 md:p-8 lg:p-12 rounded-3xl">

        <div className="flex flex-col gap-6 items-start max-w-2xl">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-1 px-3 w-fit">
            <span className="w-2.5 h-2.5 bg-brand-green rounded-full"></span>
            <span className="text-sm text-neutral-200">Available for Work</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ textWrap: 'balance' }}>
            Developer & Designer (Brand & UI/UX) Based in Lilongwe, Malawi
          </h1>
        </div>

        <div className="mt-6 lg:mt-0 max-w-sm flex flex-col items-start gap-6 shrink-0">
          <p className="text-neutral-300">
            Hi, I'm Daniel Mgawi - a UI/UX and brand designer passionate about crafting seamless digital experiences that connect and convert.
          </p>
          <SeeMyWorksButton onClick={onSeeWorks} />
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 opacity-70 hover:opacity-100"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause width={24} height={24} /> : <Play width={24} height={24} />}
      </button>
    </section>
  );
};

export default VideoHero;