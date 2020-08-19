/* 
"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
*/

let size = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

const pyramid = size => {
  let tab = [];
  let line = 0;
  for (let j = 0; j < size; j++) {
    let space = size - 1 - line; // nombre d'espaces à afficher
    let x = line + 1; // nombre de # à afficher
    for (let i = 0; i < space; i++) {
      tab.push(" ");
    }
    for (let i = 0; i < x; i++) {
      tab.push("#");
    }
    tab.push("\n");
    line++;
  }
  return tab.join("");
};
console.log(pyramid(size));
