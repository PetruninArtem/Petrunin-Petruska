let weight = 75;
let height = 183;
let age = 25;
let activityRate= 1.725;
let carbohydrates= 0;
let fats = 0;
let calorieRate = 0;
let metabolism = 0;
let proteins = 0;

metabolism = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);

calorieRate = metabolism * activityRate;

fats = (calorieRate *25)/100;
carbohydrates = (calorieRate * 35)/100;
proteins = (calorieRate* 40)/100;

console.log('калорий ', Math.round(calorieRate),' жиров ',
Math.round(fats), ' белки ', Math.round(proteins),
' углероды ', Math.round(carbohydrates));
