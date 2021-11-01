const assert = require('assert').strict;
const {findPetByName} = require('../pet_adoption');


const pets = [
  {
    name: 'Gus',
    gender: 'Male',
    breed: 'Domestic Cat',
    type: '🐱',
    age: 8,
  },
  {
    name: 'Coco',
    gender: 'Female',
    breed: 'Russell Terrier',
    type: '🐶',
    age: 5,
  },
];

// Create a descrribe block for the FindByPetName function
// Create 'it' blocks for testing that the function returns the expected result
// Ex.: findPetByName('Coco', pets) should return the following object: 
// {
  //   name: 'Coco',
  //   gender: 'Female',
  //   breed: 'Russell Terrier',
  //   type: '🐶',
  //   age: 5,
  // }
// use node assert to create your assertion. Look up the doc here as needed: (https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html 


