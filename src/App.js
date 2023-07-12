import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ElementDetails from './components/MovieApp/ElementDetails';
import ElementList from './components/MovieApp/ElementList';
import DisplayPage from './components/MovieApp/DisplayPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/displayPage' element={<DisplayPage />}></Route>
          <Route path='elementList' element={<ElementList />}></Route>
          <Route path="/details/:id" element={<ElementDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;