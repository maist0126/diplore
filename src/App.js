import React,{ Component } from 'react';
import './App.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Page3} />
          <Route exact path="/1" component={Page1} />
          <Route exact path="/2" component={Page2} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App;
