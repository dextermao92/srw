// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    backend: {
      loadPath: '/srw/locales/locales.{{lng}}.json' // JSON 文件路径
    },
    interpolation: {
      escapeValue: false // React 自动防范 XSS
    }
  });

export default i18n;
