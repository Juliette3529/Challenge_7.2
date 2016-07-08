//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
    var wrod = word.split("").sort().join().trim() ;
    ltabwords = words.length ;
    for (i = 0, i <= ltabwords , i++) {
     
        var wrods = words[i].split("").sort().join().trim() ;
        // je tableaute le mot, je le trie et je le remets en mot en enlevant les espaces . 
    if  (wrods === wrod) {
      // renvoie l'element du tableau comparé  
          return words[i] ; 
    } else{
        return [""] ;
        //sinon renvoie du viiiiiiiiide
    }
    };
    
//
// YOUR CODE GOES HERE
//
}
