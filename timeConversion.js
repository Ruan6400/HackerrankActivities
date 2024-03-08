function Horario(Hora){
    let Hora24=Hora;
    let novaHora = Hora[0]+Hora[1];
    switch (Hora[8]){
        case "A":
            if(Hora[0]+Hora[1] == "12"){
                novaHora="00";
            }
            break;
        case "P":
            if(Hora[0]+Hora[1]!="12"){
                novaHora= (Hora[0]+Hora[1])-(-12);
            }
            break;
    }
    for(let i= 2;i< Hora.length-2;i++){
        novaHora+=Hora[i];
    }
    Hora24=novaHora;
    return Hora24;   
}

///o horario deve vir no formato HH:MM:SSPM ou HH:MM:SSAM
