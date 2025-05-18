
"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FadeInScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200' from Tailwind
  threshold?: number;
  triggerOnce?: boolean;
};

export function FadeInScroll({ 
  children, 
  className, 
  delay = '', 
  threshold = 0.1,
  triggerOnce = true 
}: FadeInScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={domRef}
      className={cn(
        'opacity-0 transition-opacity duration-700 ease-in-out transform translate-y-5',
        isVisible && 'opacity-100 translate-y-0',
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
