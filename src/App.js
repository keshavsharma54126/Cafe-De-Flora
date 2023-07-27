import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Menu" element={<Menu/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
