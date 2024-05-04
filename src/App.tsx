
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { MovieContextProvider } from './contexts/MoviesContext';

function App() {
  return (
    <div className="App">
        <Router>
          <MovieContextProvider>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
          </MovieContextProvider>
        </Router>
    </div>
  );
}

export default App;
