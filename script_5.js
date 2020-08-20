/* Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

Est-ce que tous les livres ont été au moins empruntés une fois ?
Quel est livre le plus emprunté ?
Quel est le livre le moins emprunté ?
Trouve le livre avec l'ID: 873495 ;
Supprime le livre avec l'ID: 133712 ;
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/


const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 }
];

// Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

// Est-ce que tous les livres ont été au moins empruntés une fois ?

let unrentedBooks = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].rented === 0) {
    unrentedBooks.push("no");
    console.log(unrentedBooks);
  }
}
if (unrentedBooks.length === 0) {
  console.log("Oui, tous les livres ont été loués au moins une fois !");
} else {
  console.log(
    unrentedBooks.length + " livre(s) n'a (n'ont) jamais été loué(s)."
  );
}
// Quel est le livre le plus emprunté ?

books.sort(function(a, b) {
  return b.rented - a.rented;
});
console.log("Le livre le plus emprunté est: " + books[0].title);

// Quel est le livre le moins emprunté ?
console.log("Le livre le moins emprunté est: " + books[books.length - 1].title);

// Trouve le livre avec l'ID: 873495 ;

let idFound = books.find(function(post, index) {
  if (post.id == "873495") return true;
});
console.log(
  "Le titre correspondant à l'ouvrage qui a comme ID",
  idFound.id + " est : ",
  idFound.title
);

// Supprime le livre avec l'ID: 133712 ;
for (let i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    books.splice(i, 1);
  }
}
console.log("Voici l'array 'books' sans l'ID demandé :", books);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

booksNow = books.filter(book => book.id !== 133712)
console.log(booksNow.sort((a,z) => (a.title > z.title)));