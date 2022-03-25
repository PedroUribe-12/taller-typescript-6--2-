let productos: string[] = ['Tostadora','Televisor','Lava ropas'];

let numeros:number[] = [34,434,65,65,83,24];

var varios:any[] = [32,'Hola', false, null, undefined, [39,'Pedro'], NaN];

let datos:[string,boolean,number] = ['Me llamo Pedro',false,31]

let fechaActual:Date = new Date();

let indefinido:undefined;

console.log(`
    ${productos}
    ${numeros}
    ${varios}
    ${datos}
    ${fechaActual}
    ${indefinido}
`)
