import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login'
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Routes>
      <Route path='/React-Forms' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;