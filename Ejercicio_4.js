/*4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newUsers = users.map((user) => ({
  nombre: user.name,
}));

console.log(newUsers);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/

const useros = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newUseros = users.map((user) => ({
  nombre: user.name,
}));

console.log(newUseros);

var kvArray = [
  { clave: 1, valor: 10 },
  { clave: 2, valor: 20 },
  { clave: 3, valor: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.clave] = obj.valor;
  return rObj;
});

console.log(reformattedArray);
