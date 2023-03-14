import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
)
