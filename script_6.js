/* Tu as lu le titre ? Allez, tu as 1h... ok on rigole 😁. 
L'un des premiers codes dont tu as entendu parler est probablement le code génétique qui permet de traduire de l'ARN (c'est une copie de notre ADN) en protéines (qui constituent notre corps). Pourquoi ne pas faire un exercice là-dessus ?

D'abord quelques explications (on va pas te faire un cours de bio complet). Pour simplifier, l'ARN (comme l'ADN) est une suite de molécules appelées nucléotides et qu'on peut représenter par 4 lettres : A - U - G - C (pour l'ADN, remplacer U par T). Donc un morceau d'ARN peut se représenter sous la forme d'une suite de lettres : "UUACGCAGUAGA".

Notre corps est ensuite capable de lire cet ARN en le découpant par groupes de 3 lettres (appelés "codons"). Dans notre exemple ça donnerait : "UUA-CGC-AGU-AGA". Ensuite chaque codon peut être transformé en un "acide aminé" qui est juste un "morceau de protéine". Mais quelle est la règle qui dit que tel codon doit être remplacé par tel acide aminé ? C'est le fameux code génétique dont voici un extrait ci-dessous :

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine 
CCU ou CCC ou CCA ou CCG => Proline 
UUA ou UUG => Leucine 
UUU ou UUC => Phénylalanine 
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine 
UAU ou UAC => Tyrosine

Notre exemple d'ARN "UUA-CGC-AGU-AGA" donnerait donc la protéine suivante : "Leucine-Arginine-Sérine-Arginine"

Le code génétique complet permet de transformer les 64 codons possibles en 20 acides aminés. On va se contenter, sur cet exercice, de prendre juste les 6 acides aminés ci-dessus avec leurs codons correspondants.

Je veux que tu codes un script script_6.js en JS qui puisse transformer un ARN présenté sous forme de string "UUACGCAGUAGA" en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"

Afin de comparer ton travail avec les autres moussaillons, voici 2 ARN à traduire en protéines :

CCGUCGUUGCGCUACAGC
CCUCGCCGGUACUUCUCG 
*/



let data
let data_name
function check_data(data){
  switch(data){
    default:
      data_name = "Unknown"
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      data_name = "Sérine"
      break
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      data_name = "Proline"
      break
    case "UUA":
    case "UUG":
      data_name = "Leucine"
      break
    case "UUU":
    case "UUC":
      data_name = "Phénylalanine"
      break
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      data_name = "Arginine"
      break
    case "UAU":
    case "UAC":
      data_name = "Tyrosine"
      break
  }
  return data_name
}

function extract_from_string(string){
  let l = string.length
  console.log("Longueur : " + l)
  arr = []
  let j = 0
  let data
  for(i = 0; i < l; i += 3){ 
    data = string.substr(i,3)
    // console.log(data + " => " + check_data(data))
    arr[j] = check_data(data) 
    j ++
  }
  console.log("Décryptage :")
  console.log(arr.join('-'))
}
console.log("*".repeat(60))
console.log("# First: CCG-UCG-UUG-CGC-UAC-AGC")
extract_from_string("CCGUCGUUGCGCUACAGC")
console.log("*".repeat(60))
console.log("# Second: CCU-CGC-CGG-UAC-UUC-UCG")
extract_from_string("CCUCGCCGGUACUUCUCG")
console.log("*".repeat(60))
console.log("# Third: UUA-CGC-AGU-AGA")
extract_from_string("UUACGCAGUAGA")
console.log("*".repeat(60))