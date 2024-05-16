import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import {PaymentStepProvider} from "./contexts/paymentStep.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <PaymentStepProvider>
              <App />
          </PaymentStepProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
