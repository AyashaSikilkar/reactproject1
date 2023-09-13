import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  " click me to visit google"
);
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit our site</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
