import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spaces from "./components/Spaces/spaces";
import {IntlProvider} from 'react-intl';
import reportWebVitals from './reportWebVitals';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let userLang = (navigator.language || navigator.userLanguage).split("-")[0]; 
console.log("The language is: " + userLang);
let messages = localeEnMessages
if (userLang == "es"){
  messages = localeEsMessages;
}

ReactDOM.render(
  <IntlProvider  messages={messages}>
  <Spaces/>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
