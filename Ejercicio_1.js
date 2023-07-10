/*Crea una arrow function que tenga dos parametros a y b y
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
por consola la suma de los dos parametros. */

/* 1.1 Ejecuta esta función sin pasar ningún parametro*/
const sum = () => {
  const a = 10;
  const b = 5;
  console.log(` ${a + b}`);
};
sum();

/* 1.2 Ejecuta esta función pasando un solo parametro*/
const suma = (a) => {
  const b = 5;
  console.log(` ${a + b}`);
};
suma(10);

/* 1.3 Ejecuta esta función pasando dos parametros*/
const sumab = (a, b) => {
  console.log(` ${a + b}`);
};
sumab(10, 5);
