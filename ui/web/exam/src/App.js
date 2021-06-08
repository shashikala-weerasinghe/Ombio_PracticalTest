import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
         
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
