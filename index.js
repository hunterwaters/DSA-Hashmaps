  
const HashMap = require('./hashmap.js');


function main(){
  let LOTR = new HashMap();

  LOTR.set('Hobbit', 'Bilbo')
  LOTR.set('Hobbit', 'Frodo')
  LOTR.set('Wizard', 'Gandalf')
  LOTR.set('Human', 'Aragorn')
  LOTR.set('Elf', 'Legolas')
  LOTR.set('Maiar', 'The Necromancer')
  LOTR.set('Maiar', 'Sauron')
  LOTR.set('Ringbearer', 'Gollum')
  LOTR.set('LadyOfLight', 'Galadriel')
  LOTR.set('HalfElven', 'Arwen')
  LOTR.set('Ent', 'Treebeard')
  console.log(LOTR)

  //Have you hashed all the items you were asked to?
  //Yes, but the 'Hobbit' and 'Maiar' values were overwritten with new data.

  console.log('Hobbit ' + LOTR.get('Hobbit'))
  console.log('Maiar ' + LOTR.get('Maiar'))

  //Are the Hobbit and Maiar values different from what you expected?
  //Yes, the values are the second version hashed, rather than the first.

  //What is the capacity of the hash table? Explain.
  //The hash table capacity triples each time it becomes half-full. In this case, when it exceeded half of its initial eight values, it tripled to 24.
};



const WhatDoesThisDo = function(){
    //Sets two strings to an identical value.
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    //Creates new hash map.
    let map1 = new HashMap();
    //Sets the key 'Hello World.' to equal 10
    map1.set(str1,10);
    //Changes the key 'Hello World.' to equal 20
    map1.set(str2,20);
    //Creates a second hash map.
    let map2 = new HashMap();
    //Creates two new strings, both identical to Strings 1 & 2.
    let str3 = str1;
    let str4 = str2;
    //On Map 2, 'Hello World.' is now set to 20.
    map2.set(str3,20);
    //On Map 2, 'Hello World.' is changed to 10.
    map2.set(str4,10);

    //Since all the strings are identical, these will log the 'Hello World' values on both maps:
    // 20 on the first, and 10 on the second.
    console.log(map1.get(str1));
    console.log(map2.get(str3));
}



//Remove Duplicates function

function removeDuplicates(input){
  let DupHash = new HashMap()
  let result = ''
  let inputArray = input.split('')
  for(let i = inputArray.length -1; i >= 0; i --){
    DupHash.set(`${inputArray[i]}`, `${i}`)
    }
  let finArray = Object.values(DupHash._hashTable).sort((a, b) => a.value.localeCompare(b.value));
  for(let i = 0; i < finArray.length; i ++){
    result += finArray[i].key
  } return result
  }

removeDuplicates('google')



//Check Palindrome function

function checkPalindrome(input){
  let PalinHash = new HashMap()
  let inputArray = input.split('')
  for(let i = 0; i < inputArray.length; i++){
    if(PalinHash.checkif(`${inputArray[i]}`)){
      PalinHash.delete(`${inputArray[i]}`)
    } else {
    PalinHash.set(`${inputArray[i]}`, `${inputArray[i]}`)
    }} 
    if(PalinHash.length <= 1){return true}
    return false
}

checkPalindrome('matchboxtwenty')



//Get Anagrams function

let AnaHash = new HashMap()

function listAnagrams(input){
  let AnaHash = new HashMap()
  let keyArr = []
  let finArr = []
  for(let i = 0; i < input.length; i ++){
    let sortWord = ((input[i].split('')).sort()).join('')
    if(!AnaHash.checkif(sortWord)){
      AnaHash.set(sortWord, [input[i]])
      keyArr.push(sortWord)
    } else {
      let currArr = AnaHash.get(sortWord)
      currArr.push(input[i])
      AnaHash.set(sortWord, currArr)
    }}
    for(j = 0; j < keyArr.length; j ++){
      finArr.push(AnaHash.get(keyArr[j]))
    } return finArr
  }


listAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])