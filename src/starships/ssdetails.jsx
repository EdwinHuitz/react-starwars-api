import React from 'react';

function shipDetails({location}){
    const starship = location.starState.allStarShips;
        return(
            <div>
            Name: {starship.name}
            <br/>
            Model: {starship.model}
            </div>
        )
}
export default shipDetails;