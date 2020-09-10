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
    <>
    {this.state.allStarShips.map((allStarShips,idx)=>
        <div key={idx}>
            <Link to={{pathname:'/starships', starState:{allStarShips},}} >
            {allStarShips.name}
            </Link><br/>
        </div>
    )}
    </>)
}
    
}

export default starShips;
