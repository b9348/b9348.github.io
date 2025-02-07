import React, { useState } from 'react';
import './modalAd.css'; // 确保你有相应的CSS文件来处理样式

const ModalAd = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>广告</h2>
            <h4>点击×或框外关闭</h4>
            <p>资本羊毛，联通活动，预办卡给18块，不需要真办，填意向信息就行，激活的时候可以拒绝。</p>
            <p>非诈骗，中国联通+百度双国企背书</p>
            <p>链接：
                <a href="https://tieba.baidu.com/p/9414771425">https://tieba.baidu.com/p/9414771425</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAd;