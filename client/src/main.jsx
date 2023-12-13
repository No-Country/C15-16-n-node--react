import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <GoogleOAuthProvider clientId="240318310393-fpa9t8dq37qq00rv9qgbt9rit8ejbec6.apps.googleusercontent.com">...
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
