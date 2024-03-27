let clasesMissed=prompt('Сколько пар ты пропустил?');
let debt = 0;
let message = 0;

clasesMissed = clasesMissed*15;

debt= (clasesMissed*400)/1000;

message= 'за ' + clasesMissed + ' пропущенных, я должен пробежать ' 
+ debt + ' км';

console.log(message);