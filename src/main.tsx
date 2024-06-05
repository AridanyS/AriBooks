import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import BooksGrid from './components/books.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <BooksGrid />
  </React.StrictMode>,
)
