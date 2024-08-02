const  Heros= ["thor", "a", "b", "c", "d"]
const  Heer= ["i", "h", "g", "f", "e"]

Heros.push(Heer)

// console.log(Heros);
// console.log(Heros[5][1]);

//  const AllHeros = Heros.concat(Heer)
// console.log(AllHeros);


const all_New_Heros = [...Heros, ...Heer]

console.log((all_New_Heros));

const anotherArrey = [1, 2, 3, [4, 5, 6, ] ,7, [6, 7, 8[ 4, 5]]]
const Real_another_arrey = anotherArrey.flat(Infinity)
console.log(Real_another_arrey);


console.log(Array.isArray("Alok"));
console.log(Array.from("Alok"));
console.log(Array.from({name: "ALok"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
