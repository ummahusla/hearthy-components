import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Pages/Home/index.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return <Home />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
