//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word ;
};

Anagram.prototype.trie = function (carotte) {
    mot = this.carotte.toLowerCase();
    mot = mot.split("");
    mot = mot.sort();
    mot = mot.join();
    mot = mot.trim();
    return mot;
};
// je tableaute le mot, je le trie et je le remets en mot en enlevant les espaces .

Anagram.prototype.matches = function (words) {
    var wrod = this.trie(this.word) ;
    var ltabwords = words.length ;
    var matches = [] ;
    
    for (var i = 0 ; i <= ltabwords ; i++) {
     var Ewords = words[i];
     var wrods = this.trie(Ewords) ;
         
    if  (wrods === wrod) {
      // renvoie l'element du tableau comparé  
        matches[i] = Ewords ;
        // matches = matches + matches.push(Ewords) ; 
    }
    }
    return matches;
    
//
// YOUR CODE GOES HERE
//
};
