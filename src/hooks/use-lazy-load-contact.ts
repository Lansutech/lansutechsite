import { useEffect } from 'react';

export const useLazyLoadContact = (isVisible: boolean) => {
  useEffect(() => {
    if (isVisible) {
      import('@emailjs/browser').then((emailjs) => {
        if (!window.__emailjs_initialized) {
          emailjs.init('default');
          window.__emailjs_initialized = true;
        }
      });
    }
  }, [isVisible]);
};

declare global {
  interface Window {
    __emailjs_initialized?: boolean;
  }
}
