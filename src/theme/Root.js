import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // 初始化 Google AdSense 自动广告
    try {
      if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return <>{children}</>;
}

