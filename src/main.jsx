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
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
