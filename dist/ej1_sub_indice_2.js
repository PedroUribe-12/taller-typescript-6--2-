"use strict";
//--------------------------------------------------1---------------------------------------------------
function explainVar() {
    var a = 10;
    console.log(a);
    if (true) {
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
explainVar();
//---------------------------------------------------2---------------------------------------------------
var i = 60;
function explainVar2() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
explainVar2();
console.log(`Despues del loop ${i}`);
//---------------------------------------------------3---------------------------------------------------
var i2 = 60;
function explainVar3() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
explainVar3();
console.log(`Despues del loop ${i2}`);
//---------------------------------------------------4---------------------------------------------------
function explainConst() {
    const x = 10;
    console.log(x);
    //x=20;
    console.log(x);
}
explainConst();
