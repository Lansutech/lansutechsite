/// <reference types="vite/client" />

declare global {
  interface Window {
    __emailjs_initialized?: boolean;
  }
}
