import type { HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'auto-rotate-delay'?: string;
        'rotation-per-second'?: string;
        'shadow-intensity'?: number | string;
        'shadow-softness'?: number | string;
        exposure?: number | string;
        'tone-mapping'?: string;
        'interaction-prompt'?: string;
        'camera-orbit'?: string;
        'camera-target'?: string;
        poster?: string;
        'environment-image'?: string;
        'skybox-image'?: string;
      };
    }
  }
}
