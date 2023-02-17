console.log(4+4)
//array ejemplo
let paises = ["argentina","brasil","paraguay","bolivia","chile"]

console.log(paises[0])
//array de objetos
let scaloneta = [
{nombre: "lionel", apellido: "messi"},
{nombre:"rodrigo", apellido:"depaul"},
{nombre:"colo", apellido: "mcallister"},
{nombre:"nahuel",apellido:"molina"},
{nombre:"leandro",apellido:"paredes"},
{nombre:"juan", apellido:"foyth"},
{nombre:"gonzalo",apellido:"montiel"},
{nombre:"angel",apellido:"dimaria"},
{}

]
console.log(scaloneta[00]);
//objetoboke
let boke = {
    jugador:"riquelme",
    jugador1:"palermo", 
    jugador2:"delgado",
jugador3:"traverso",
jugador4:"ibarra",
jugador5:"chapita",
jugador6:"cagna",
jugador7:"basualdo",
jugador8:"samuel",
jugador9:"bermudez"
};
console.log(boke.jugador);
console.log(boke);

boke.jugador5 = "guille";

console.log(boke);
let keys = Object.keys(boke);
console.log(keys); 
let values = Object.values(boke);
console.log(values); 
console.log(keys);
console.log(values); 
boke.jugador10="takahara";
console.log(boke);
boke.jugador11="tchami";
console.log(boke);
delete boke.jugador11;
console.log(boke);
Object.entries(boke);




//array boke
let boque = [
"riquelme", "palermo", "delgado", "traverso", "ibarra",
 "chapita", "cagna", "basualdo", "samuel", "bermudez"
]

console.log(boque[02]);

console.log(boque.length)
boque.shift();
console.log(boque);
boque.pop();
console.log(boque);
boque.push("bermudez");
boque.unshift("riquelme");
console.log(boque);


console.log(boque.indexOf("riquelme"));






