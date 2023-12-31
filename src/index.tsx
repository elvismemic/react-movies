import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //global
import App from './App';
import reportWebVitals from './reportWebVitals';
import Simple from './Simple';
import Expressions from './Expressions';
import Conditionals from './Conditionals';
import Events from './Events';
import ConditionalsIf from './ConditionalsIf';
import MapExample from './MapExample';
import ConditionalsIfSeveralComponents from './ConditionalsIfSeveralComponents';
import CSSExample from './CSSExample';
import DemoExamples from './DemoExamples';
import ErrorExample from './ErrorExample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App></App> */}
    {/* <Simple /> */}
    {/* <Expressions></Expressions> */}
    {/* <Conditionals></Conditionals> */}
    {/* <Events></Events> */}
    {/* <ConditionalsIf></ConditionalsIf> */}
    {/* <MapExample></MapExample> */}
    {/* <ConditionalsIfSeveralComponents></ConditionalsIfSeveralComponents> */}
    {/* <CSSExample></CSSExample> */}
    {/* <DemoExamples></DemoExamples> */}
    <ErrorExample></ErrorExample>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
