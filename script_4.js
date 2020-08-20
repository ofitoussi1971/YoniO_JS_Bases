/* Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :

Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
Sors une array qui contient le prénom et le nom des entrepreneurs ;
Quel âge aurait chaque inventeur aujourd'hui ?
Trie les entrepreneurs par ordre alphabétique du nom de famille.*/


const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 }
];

// Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

let seventies = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
    seventies.push(
      entrepreneurs[i].first +
        " " +
        entrepreneurs[i].last +
        ": " +
        entrepreneurs[i].year
    );
  }
}
console.log(seventies);

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

let fullNames = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  fullNames.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}
console.log(fullNames);

// Quel âge aurait chaque inventeur aujourd'hui ?

const currentYear = 2020;
let entrepreneursAges = [];

for (let i = 0; i < entrepreneurs.length; i++) {
  entrepreneursAges.push(
    entrepreneurs[i].first +
      " " +
      entrepreneurs[i].last +
      ": " +
      (currentYear - entrepreneurs[i].year)
  );
}
console.log(entrepreneursAges);

// Trie les entrepreneurs par ordre alphabétique du nom de famille.

fromAtoZ = entrepreneurs.sort((a,z) => (a.last > z.last))

console.log(fromAtoZ)


