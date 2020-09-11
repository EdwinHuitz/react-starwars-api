import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAllStarships} from '../services/sw-api';

class starShips extends Component{
  state={
    allStarShips:[],
}
async componentDidMount()
{
    const allStarShips=await getAllStarships();
    this.setState({allStarShips: allStarShips.results})
}
render()
{
    return(
    <div className="main">
    {this.state.allStarShips.map((allStarShips,idx)=>
        <div key={idx}>
            <Link to={{pathname:'/starships', starState:{allStarShips},}} >
            <button className="btn">{allStarShips.name}</button>
            </Link>
        </div>
    )}
    </div>)
}
    
}

export default starShips;
