import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);

      // Scroll to top on page change
      if (scrollRef.current) {
        scrollRef.current.scrollTo(0, 0);
      }
    }
  };

  return (
    <div
      ref={scrollRef}
      className={cn('h-full w-full overflow-auto', className)}
    >
      <div
        className={cn(
          transitionStage === 'fadeIn' ? 'animate-fade-in' : 'animate-fade-out',
          'min-h-full',
        )}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    </div>
  );
}
