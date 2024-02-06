import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recherche from './Recherche';
import reportWebVitals from './reportWebVitals';
import Todo from './components/Todo';
const DATA = [
  { id: "todo-0", name: "Manger", completed: true }, 
  { id: "todo-1", name: "Dormir", completed: false },
 { id: "todo-2", name: "Recommencer", completed: false },
]; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <App tasks={DATA} /> 
 
  // </React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/recherche/:id" element={<Recherche/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
