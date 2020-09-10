import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import StarShips from './starships/starships'
import StarShipPage from './starships/ssdetails'

function App(){

    return(
    <>
    <span className="banner"><h1>Star Wars</h1></span>
    <Route exact path='/' render={()=>
      <StarShips />
    } />
    <Route exact path='/starships' render={({location})=>
      <StarShipPage location={location} />
    } />
    </>)    
}

export default App;
