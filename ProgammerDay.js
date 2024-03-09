function ProgDay(ano){
    let meses = [31,28,31,30,31,30,31,31,30,31,30,31];
    let nomes = ["Janeiro","Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
     "Dezembro"];
     
    if(ano < 1700 || ano > 2700){
        console.log("ano invalido");
    }
    else{
        if(ano == 1918){
            meses[1]-=13;
        }else{
            if(ano % 4 == 0){
                meses[1] = 29;
            }
        }
        let soma = 0;
        for(let i = 0;i < 12; i++){
            if(soma + meses[i] > 256){
                console.log("o dia do programador nesse ano é no dia "+(256-soma)+" de "+nomes[i]+" de "+ano);
                i=12;
            }else{
                soma+=meses[i];
            }
        }
    }
}
