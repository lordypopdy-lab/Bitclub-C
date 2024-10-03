import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import "../src/js/main.js"
// import "../src/js/init.js"
// import "../src/js/carousel.js"
// import "../src/js/jquery.min.js"
// import "../src/js/apexcharts.js"
// import "../src/js/count-down.js"
// import "../src/js/line-chart.js"
// import "../src/js/chart.bundle.min.js"
// import "../src/js/swiper-bundle.min.js"
// import "../src/js/bootstrap.min.js"

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="170268353832-0fn4qbgklemeb9s0o5elvi99ronia9ov.apps.googleusercontent.com">
  <StrictMode>
    <App />
  </StrictMode>,
  </GoogleOAuthProvider>
)
