import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: () => void;
  fallbackSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  onError,
  fallbackSrc 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setCurrentSrc(src);

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
      
      // Try fallback image if provided
      if (fallbackSrc && src !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        const fallbackImg = new Image();
        fallbackImg.src = fallbackSrc;
        fallbackImg.onload = () => {
          setIsLoaded(true);
          setHasError(false);
        };
        fallbackImg.onerror = () => {
          setHasError(true);
          onError?.();
        };
      } else {
        onError?.();
      }
    };
  }, [src, fallbackSrc, onError]);

  // Show placeholder if image failed to load and no fallback
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (
      <div className={`bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center ${className || ''}`}>
        <span className="text-neutral-400 text-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`transition-all duration-300 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className || ''}`}
      onError={() => {
        if (currentSrc !== fallbackSrc && fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        } else {
          setHasError(true);
          onError?.();
        }
      }}
    />
  );
};

export default LazyImage;
