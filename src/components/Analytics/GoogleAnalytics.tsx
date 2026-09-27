import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_TRACKING_ID || window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (GA_TRACKING_ID && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;