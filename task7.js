let height = 1.83;
let weight = 75;
let fatMass = 0.8;
let bodyMassIndex = 0;
let fatPercent = 0;

bodyMassIndex = weight/(height*height);
console.log(Math.round(bodyMassIndex));

fatPercent = (fatMass/weight)*100;
console.log(Math.round(fatPercent));

