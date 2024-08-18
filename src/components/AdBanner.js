"use client";
import { useEffect } from "react";

export const AdBanner = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <></>;
};
export default AdBanner;
