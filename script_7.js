/* Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
*/




let text = prompt("Dis moi tout:")

let l = text.length


function answer_generator(string){
  ch = string.charAt(l-1)
  let answer


  if(ch === "?"){
    answer = "Ouais ouais..."
  } else if (check_if_string_is_upcase(string) == true){
    answer = "Pwa, calme-toi..."
  } else if(contain_str(string)){
    answer = "on s' fait une partie soum-soum ?"
  } else if(string === ""){
    answer = "T'es en PLS ?"
  } else {
    answer = "Balek"
  }
  
  return answer
}

function check_if_character_is_upcase(character){
  if (character != character.toLowerCase())
  {
    return true
  }
  else
  {
    return false
  }
}

function check_if_string_is_upcase(string){
  let i
  let checking
  string = string.replace(/[^a-zA-Z]/g, "")
  for(i = 0; i < string.length; i++){
    let check = check_if_character_is_upcase(string[i])
    if(check === false){
      checking = 0
      break
    } else {
      checking = 1
    }
  }
  if(checking == 1){
    return true
  } else {
    return false
  }
}

function contain_str(str){
  str = str.toLowerCase()
  if(str.includes("fortnite")){
    return true
  } else {
    return false
  }
}

console.log(answer_generator(text))