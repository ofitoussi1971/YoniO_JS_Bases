// Un prompt s'affiche avec la question suivante
//"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
//"Le résultat est : 24"

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(number) {
  let f = 1;
  for (let i = 1; i <= number; i++) {
    f = f * i; // ou f *= i;
  }
  return f;
}
console.log("Le résultat est: " + fact(number));
