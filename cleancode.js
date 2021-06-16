  console.log(wordChoice(["bonjour", "vous", "dshfeoifdsdh", "alex", "dis" ]));

  function lengthWordFuhnction(lengthWord){
    let word = "";
    for (i=0; i<lengthWord.length; i++){
     if (word.length<lengthWord[i].length){
        word=lengthWord[i];
    }
    else if (word.length>lengthWord[i].length){
      word=lengthWord[i];
    }
    
}
return word;
  }

function wordChoice(lengthWord){
    return lengthWord.reduce((a,b) => a.length< b.length ? a : b, undefined);
    
    return lengthWord.reduce(function(a, b) {
      return a.length< b.length ? a : b
    }, undefined);
}

var wordChoice = function (lengthWorld) {

}

var wordChoice = (a, b) => {
  return a-b;
}
var wordChoice = (a, b) => a-b;

