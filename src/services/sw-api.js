const link="https://swapi.dev";
export function getAllStarships()
{
    return fetch(`${link}/api/starships/`)
    .then(res=>res.json())
}