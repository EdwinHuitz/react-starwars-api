import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import StarShips from './starships/starships'
import StarShipPage from './starships/ssdetails'

function App(){

    return(
    <>
    <span className="stars"></span><span className="twinkling"></span><span className="clouds"></span>
    <span className="banner"><h1><a href="/" className="a1">Star Wars Ships</a></h1><a rel="noopener noreferrer" target="_blank" href="https://swapi.dev/"><h3>swapi.dev</h3></a></span>
    <Route exact path='/' render={()=>
      <StarShips />
    } />
    <Route exact path='/starships' render={({location})=>
      <StarShipPage location={location} />
    } />
    </>)    
}

export default App;
