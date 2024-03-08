function OndeAfrutaCaiu(Macieira,CasaA,CasaB,Laranjeira,Macas,Laranjas){
    let Pmaca = [];
    let MacasEmCasa=0;
    let Plar = [];
    let LarsEmCasa=0;
        
    for(let i=0;i<3;i++){
        Pmaca.push(Macas[i]+Macieira);
        if(Pmaca[i] >= CasaA && Pmaca <= CasaB){
            MacasEmCasa++;
        }
    }
    for(let i=0;i<3;i++){
        Plar.push(Laranjas[i]+Laranjeira);
        if(Plar[i] >= CasaA && Plar <= CasaB){
            LarsEmCasa++;
        }
    }
    console.log("cairam "+MacasEmCasa+" maçãs e "+LarsEmCasa+" laranjas em casa");
    console.log("local de queda das maçãs "+Pmaca);
    console.log("local de queda das laranjas "+Plar);
    console.log("a casa vai de "+CasaA+" até "+CasaB);
    console.log("macieira :"+Macieira+", laranjeira :"+Laranjeira);
}


//Randomizacao de numeros para automatizar a aplicacao da funcao
let A = Math.floor(Math.random()*11)-5;
let B = A + Math.floor(Math.random()*5);
let C = B + Math.floor(Math.random()*7);
let D = C + Math.floor(Math.random()*11);
let E = [];
let F = [];
for(let i=0;i < 3;i++){
    let Num = Math.floor(Math.random()*9)-4;
    E.push(Num);
}
for(let i=0;i < 3;i++){
    let Num = Math.floor(Math.random()*9)-4;
    F.push(Num);
}


//Chamada da funcao
OndeAfrutaCaiu(A,B,C,D,E,F);