import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Contador from './components/Contador';

//FontAwesome
import "@fortawesome/fontawesome-free/css/all.min.css";

let segundos = 0;

setInterval(() => {
  segundos++;

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Contador segundos={segundos} />
    </React.StrictMode>
  );
}, 1000);