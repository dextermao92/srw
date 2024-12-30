import React from "react";
import wechatQr from "../Assets/images/image.png"; // 替换为您的 WeChat 二维码图片路径
import redQr from "../Assets/images/image.png";       // 替换为您的 小红书 二维码图片路径
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us">
    <h2>{t("contact.title")}</h2>
    <div className="contact-content">
      {/* 二维码区域 */}
      <div className="qr-codes">
        <div className="qr-item">
          <img src={wechatQr} alt="WeChat QR" />
          <p>{t("contact.wechat")}</p>
        </div>
        <div className="qr-item">
          <img src={redQr} alt="小红书 QR" />
          <p>{t("contact.red")}</p>
        </div>
      </div>

      <div className="contact-info">
        <h3>{t("contact.branch")}</h3>
        <p><strong>{t("contact.office")}:</strong> Level 2, 488 Bourke Street, Melbourne, VIC 3000</p>
        <p><strong>{t("contact.email")}:</strong> xxx@harry.com</p>
        <p><strong>{t("contact.phone")}:</strong> +61 03 9640 0160</p>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
