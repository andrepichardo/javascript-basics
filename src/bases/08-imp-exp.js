// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

// console.log(owners);
// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }
//         else {
//             return false
//         }
//     } );
// }

// console.log(getHeroesById(2));

// Find y Filter:

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroesById(4));

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner("Marvel"));