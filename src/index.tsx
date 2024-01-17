import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import global_en from "./Translations/en/global.json"
import global_pt from "./Translations/pt/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation:{escapeValue: true},
  lng: "en",
  resources:{
    en:{
      global: global_en
    },
    pt:{
      global: global_pt
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
