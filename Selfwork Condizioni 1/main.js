let v = Math.floor(Math.random() * 31);
let voto = ``;

if(v >= 0 && v < 18) {
    voto = `Insufficiente`;
}else if(v >= 18 && v < 21)
    {
    voto = `Sufficiente`;
}else if(v >= 21 && v < 24)
    {
    voto = `Buono`;
}else if(v >= 24 && v < 27)
    {
    voto = `Distinto`;
}else if(v >= 27 && v <= 29)
    {
    voto = `Ottimo`;
}else if(v= 30)
    {
    voto = `Eccellente`;
}else{
    voto = `Non classificato`;
}

console.log(`CASO IF/ELSE: Il tuo voto e' ${v}, quindi ${voto}.`);

switch(v){
    case 0:
    voto = `Insufficiente`;
    break;
    case 1:
    voto = `Insufficiente`;
    break;
    case 2:
    voto = `Insufficiente`;
    break;
    case 3:
    voto = `Insufficiente`;
    break;
    case 4:
    voto = `Insufficiente`;
    break;
    case 5:
    voto = `Insufficiente`;
    break;
    case 6:
    voto = `Insufficiente`;
    break;
    case 7:
    voto = `Insufficiente`;
    break;
    case 8:
    voto = `Insufficiente`;
    break;
    case 9:
    voto = `Insufficiente`;
    break;
    case 10:
    voto = `Insufficiente`;
    break;
    case 11:
    voto = `Insufficiente`;
    break;
    case 12:
    voto = `Insufficiente`;
    break;
    case 13:
    voto = `Insufficiente`;
    break;
    case 14:
    voto = `Insufficiente`;
    break;
    case 15:
    voto = `Insufficiente`;
    break;
    case 16:
    voto = `Insufficiente`;
    break;
    case 17:
    voto = `Insufficiente`;
    break;
    case 18:
    voto = `Sufficiente`;
    break;
    case 19:
    voto = `Sufficiente`;
    break;
    case 20:
    voto = `Sufficiente`;
    break;    
    case 21:
    voto = `Buono`;
    break;
    case 22:
    voto = `Buono`;
    break;
    case 23:
    voto = `Buono`;
    break;
    case 24:
    voto = `Distinto`;
    break;
    case 25:
    voto = `Distinto`;
    break;
    case 26:
    voto = `Distinto`;
    break;
    case 27:
    voto = `Ottimo`;
    break;
    case 28:
    voto = `Ottimo`;
    break;
    case 29:
    voto = `Ottimo`;
    break;
    case 30:
    voto = `Eccellente`;
    break;
    
}

console.log(`CASO SWITCH: Il tuo voto e' ${v}, quindi ${voto}.`);