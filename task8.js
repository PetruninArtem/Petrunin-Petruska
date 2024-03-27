let firstLeg = 300;
let secondLeg = 700;
let hypotenuse = 0;
let perimeter = 0;

hypotenuse = Math.sqrt((firstLeg*firstLeg)+(secondLeg*secondLeg));
hypotenuse = Math.round(hypotenuse);

perimeter= firstLeg + secondLeg + hypotenuse;
console.log(perimeter);
