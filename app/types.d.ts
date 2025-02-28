declare module '@splidejs/react-splide' {
  import { Options } from '@splidejs/splide';
  import { ComponentProps, ReactNode } from 'react';

  export interface SplideProps extends ComponentProps<'div'> {
    options?: Options;
    children?: ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<ComponentProps<'li'>>;
}