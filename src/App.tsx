
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { MovieContextProvider } from './contexts/MoviesContext';
import Details from './pages/details';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
        <Router>
          <MovieContextProvider>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/details/:type/:id" element={<Details/>}></Route>
            <Route path="/404" element={<NotFound/>}></Route>
          </Routes>
          </MovieContextProvider>
        </Router>
    </div>
  );
}

export default App;
