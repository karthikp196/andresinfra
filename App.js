import React , {Component} from 'react';
import {Text , View} from 'react-native';
import Routes from './Routes';
import Login  from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Partner from './components/Partner';


class App extends Component {
 
 
    render()
    {
      return(
            <Routes />
      )
    }
}
export default App;