import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import './Fonts/Montserrat-Light.ttf'
import './Fonts/Montserrat-Regular.ttf'
import './Fonts/Montserrat-SemiBold.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
