import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MobileNavigation from './Components/Elements/MobileNavigation';

function App() {
  return (
    <div className="App">
       <Router>
        <MobileNavigation/>
        <main>
          <Switch>

            <Route path="/" exact>
            <LandingPage/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
