
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { MovieContextProvider } from './contexts/MoviesContext';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
        <Router>
          <MovieContextProvider>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/details/:type/:id" element={<Details/>}></Route>
          </Routes>
          </MovieContextProvider>
        </Router>
    </div>
  );
}

export default App;
