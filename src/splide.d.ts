// src/splide.d.ts
declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface SplideProps {
    children?: ReactNode;
        options?: Record<string, string> | Record<string, number> | Record<string, boolean> | Record<string>;
    className?: string;
    hasTrack?: boolean;
    ariaLabel?: string;
    // add more props if you need
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
    // add more props if you need
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
