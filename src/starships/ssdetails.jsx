import React from 'react';

function shipDetails({location}){
    const s = location.starState.allStarShips;
    if(s.name==="n/a"||s.name==="unknown"){s.name='Unknown'}
    if(s.model==="n/a"||s.model==="unknown"){s.model='Unknown'}
    if(s.manufacturer==="n/a"||s.manufacturer==="unknown"){s.manufacturer='Unknown'}
    if(s.cost_in_credits==="n/a"||s.cost_in_credits==="unknown"){s.cost_in_credits='Unknown'}
    if(s.max_atmosphering_speed==="n/a"||s.max_atmosphering_speed==="unknown"){s.max_atmosphering_speed='Unknown'}
    if(s.crew==="n/a"||s.crew==="unknown"){s.crew='Unknown'}
    if(s.passengers==="n/a"||s.passengers==="unknown"){s.passengers='Unknown'}
    if(s.cargo_capacity==="n/a"||s.cargo_capacity==="unknown"){s.cargo_capacity='Unknown'}
    if(s.consumables==="n/a"||s.consumables==="unknown"){s.consumables='Unknown'}
    if(s.hyperdrive_rating==="n/a"||s.hyperdrive_rating==="unknown"){s.hyperdrive_rating='Unknown'}
    if(s.MGLT==="n/a"||s.MGLT==="unknown"){s.MGLT='Unknown'}
    if(s.starship_class==="n/a"||s.starship_class==="unknown"){s.starship_class='Unknown'}

        return(
            <div className="main1">
            <table>
                <tr><td className="leftT"><h3>Name:</h3></td><td><h3>{s.name}</h3></td>
                <td className="leftT1"><h3>Model:</h3></td><td><h3>{s.model}</h3></td></tr>
                <tr><td className="leftT"><h3>Manufacturer:</h3></td><td><h3>{s.manufacturer}</h3></td>
                <td className="leftT1"><h3> Cost in Credits:</h3></td><td><h3>{s.cost_in_credits}</h3></td></tr>
                <tr><td className="leftT"><h3> Max Atmosphering Speed:</h3></td><td><h3>{s.max_atmosphering_speed}</h3></td>
                <td className="leftT1"><h3>Crew:</h3></td><td><h3>{s.crew}</h3></td></tr>
                <tr><td className="leftT"><h3>Passenger Capacity:</h3></td><td><h3>{s.passengers}</h3></td>
                <td className="leftT1"><h3>Cargo Capacity:</h3></td><td><h3>{s.cargo_capacity}</h3></td></tr>
                <tr><td className="leftT"><h3>Food Capacity:</h3></td><td><h3>{s.consumables}</h3></td>
                <td className="leftT1"><h3>Hyperdrive Rating:</h3></td><td><h3>{s.hyperdrive_rating}</h3></td></tr>
                <tr><td className="leftT"><h3>Mega-Light per Hour:</h3></td><td><h3>{s.MGLT}</h3></td>
                <td className="leftT1"><h3>Star-Ship Class:</h3></td><td><h3>{s.starship_class}</h3></td></tr>
            </table>
            </div>
        )
}
export default shipDetails;