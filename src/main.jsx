import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuestionProvider } from './context/QuestionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuestionProvider>
    <App />
  </QuestionProvider>
)
