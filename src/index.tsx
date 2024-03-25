import React from 'react'
import ReactDOM from 'react-dom/client'
import { AddressBook } from './AddressBook'
import './index.css'
import reportWebVitals from './reportWebVitals'


// Creates a React root for displaying content inside a browser DOM element.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AddressBook />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
