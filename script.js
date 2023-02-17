// Creamos un array con algunos elementos
let myArray = ['manzana', 'banana', 'naranja', 'uva', 'pera'];

// Método length: Devuelve la cantidad de elementos en el array.
console.log(myArray.length); //  5

// Método push: Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
myArray.push('kiwi'); // Agrega 'kiwi' al final del array.
console.log(myArray); // ['manzana', 'banana', 'naranja', 'uva', 'pera', 'kiwi']

// Método pop: Elimina el último elemento del array y devuelve el elemento eliminado.
let lastElement = myArray.pop(); // Elimina 'kiwi' del final del array.
console.log(lastElement); //  'kiwi'
console.log(myArray); //  ['manzana', 'banana', 'naranja', 'uva', 'pera']

// Método shift: Elimina el primer elemento del array y devuelve el elemento eliminado.
let firstElement = myArray.shift(); // Elimina 'manzana' del inicio del array.
console.log(firstElement); //  'manzana'
console.log(myArray); //  ['banana', 'naranja', 'uva', 'pera']

// Método unshift: Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.
myArray.unshift('sandía', 'melón'); // Agrega 'sandía' y 'melón' al inicio del array.
console.log(myArray); // ['sandía', 'melón', 'banana', 'naranja', 'uva', 'pera']

// Método slice: Devuelve una copia superficial del array desde el índice inicial hasta el índice final (no incluido).
let slicedArray = myArray.slice(2, 4); // Obtiene los elementos 'banana' y 'naranja' en un nuevo array.
console.log(slicedArray); //  ['banana', 'naranja']



//objetos

// Creamos un objeto con algunas propiedades y métodos
let person = {
  name: "Ana",
  age: 30,
  job: "Developer",
  address: {
    city: "Bogotá",
    country: "Colombia"
  }
};

// Método Object.keys: Devuelve un array de los nombres de las propiedades del objeto.
let keys = Object.keys(person);
console.log(keys); //  ['name', 'age', 'job', 'address',]

// Método Object.values: Devuelve un array de los valores de las propiedades del objeto.
let values = Object.values(person);
console.log(values); //['Ana', 30, 'Developer', { city: 'Bogotá', country: 'Colombia' }]

// Método hasOwnProperty: Devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propiedad propia (no heredada).
let nom = person.hasOwnProperty("name");
let salary = person.hasOwnProperty("salary");
console.log(nom); // true
console.log(salary); // false

// Método Object.assign: Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.
let personCopy = Object.assign({}, person);
console.log(personCopy); // { name: 'Ana', age: 30, job: 'Developer', address: { city: 'Bogotá', country: 'Colombia' } }
