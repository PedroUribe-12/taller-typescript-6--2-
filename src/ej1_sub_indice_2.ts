//--------------------------------------------------1---------------------------------------------------

function explainVar(){
    var a:number = 10;
    console.log(a)
    if(true){
        var a:number = 20;
        console.log(a);
    }

    console.log(a);
}

explainVar();

//---------------------------------------------------2---------------------------------------------------

var i:number = 60;

function explainVar2(){
    for(var i:number = 0; i<5; i++){
        console.log(i);
    }
}

explainVar2();

console.log(`Despues del loop ${i}`);

//---------------------------------------------------3---------------------------------------------------

var i2:number = 60;

function explainVar3(){
    for(let i:number = 0; i<5; i++){
        console.log(i);
    }
}

explainVar3();

console.log(`Despues del loop ${i2}`);

//---------------------------------------------------4---------------------------------------------------

function explainConst(){
    const x:number = 10;
    console.log(x)
    //x=20;

    console.log(x);
}

explainConst();