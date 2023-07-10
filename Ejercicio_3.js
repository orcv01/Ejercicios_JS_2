/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsList1 = [...pointsList];
console.log(pointsList1);

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toy1 = { ...toy };
console.log(toy1);

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.*/

const pointsLista = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const pointNew = [...pointsLista, ...pointsLis2];
console.log(pointNew);

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.*/

const toya = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toyNew = { ...toya, ...toyUpdate };
console.log(toyNew);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.*/

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

let nuevoArray = [];
nuevoArray = [...nuevoArray, "rojo"];
nuevoArray = [...nuevoArray, "azul"];
nuevoArray = [...nuevoArray, "verde"];
nuevoArray = [...nuevoArray, "naranja"];
console.log(nuevoArray);
