import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route exact path='/' element={<Login/>}></Route>
           <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
