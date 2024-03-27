let age = 17;
let pulseeAtRest = 60;
let intensity = 75;
let maxpulse = 220 - age;
let pulseAtworkout = 0;

pulseAtworkout = (maxpulse-pulseeAtRest) * intensity + pulseeAtRest;

console.log(Math.round(pulseAtworkout));
