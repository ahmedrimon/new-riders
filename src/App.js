import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
          

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
