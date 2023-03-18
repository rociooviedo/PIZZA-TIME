import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import NavBar from './components/NavBar'
import Home from './vistas/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './vistas/Cart';
import Login from './vistas/Login';
import Register from './vistas/Register';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/cart' exact Component={Cart} />
          <Route path='/login' exact Component={Login} />
          <Route path='/register' exact Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;