//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word ;
};
 



Anagram.prototype.matches = function (words) {
    var wrod = this.trie(this.word) ;

    var matches = [] ;
    // typeof "" === 'string' 
    //var args = Array.from(arguments);
    //voir pour transformer les string en array
   if (typeof words === 'string'){
       words = arguments;
    }
    var ltabwords = words.length ;
    for (var i = 0 ; i < ltabwords ; i++) {
     var Ewords = words[i];
     var wrods = this.trie(Ewords) ; 
    if  (wrods === wrod && Ewords.toUpperCase() != this.word.toUpperCase()) {
    //&& pour verifier que mots differents 
      // renvoie l'element du tableau comparé  
       // matches[i] = Ewords ;
        matches.push(Ewords) ; 
    }
    }
    return matches;

};

Anagram.prototype.trie = function (string1) {
    var str = string1.toUpperCase();
    str = str.split("");
    str = str.sort();
    str = str.join("");
    return str;
};
// je tableaute le mot, je le trie et je le remets en mot en enlevant les espaces .