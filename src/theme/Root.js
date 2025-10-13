import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // 创建 AMP 自动广告元素
    const ampAutoAds = document.createElement('amp-auto-ads');
    ampAutoAds.setAttribute('type', 'adsense');
    ampAutoAds.setAttribute('data-ad-client', 'ca-pub-9617969692940509');
    
    // 将广告代码插入到 body 的开头
    if (document.body && document.body.firstChild) {
      document.body.insertBefore(ampAutoAds, document.body.firstChild);
    } else if (document.body) {
      document.body.appendChild(ampAutoAds);
    }

    // 清理函数
    return () => {
      if (ampAutoAds && ampAutoAds.parentNode) {
        ampAutoAds.parentNode.removeChild(ampAutoAds);
      }
    };
  }, []);

  return <>{children}</>;
}

