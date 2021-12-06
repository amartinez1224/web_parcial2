import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spaces from "./components/Spaces/spaces";
import {IntlProvider} from 'react-intl';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let userLang = (navigator.language || navigator.userLanguage).split("-")[0]; 
let messages = localeEnMessages
if (userLang == "es"){
  messages = localeEsMessages;
}

ReactDOM.render(
  <IntlProvider locale="en" messages={messages}>
  <Spaces/>
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
