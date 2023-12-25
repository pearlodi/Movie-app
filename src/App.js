import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import ElementDetails from './views/ElementDetails';
import ElementList from './views/ElementList';
import DisplayPage from './views/DisplayPage';
function App() {
  useEffect(() => {
    document.title = 'Movies'; 
    return () => {
      document.title = 'Movies'; 
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<DisplayPage />}></Route>
          <Route path='elementList' element={<ElementList />}></Route>
          <Route path="/details/:id" element={<ElementDetails />}></Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
