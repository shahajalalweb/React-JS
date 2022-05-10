import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Products from './components/Products';
import Reports from './components/Reports';
import Error from './components/Error';
import Dashbord from './components/Dashbord';


function App() {
  const isLoggedIn = false;

  return (
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/dashbord' component={Dashbord} />


        <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
        </Route>

        <Route component={Error} />
        </Switch>
      </Router>
  );
}

export default App;
