function FazEscada(degraus){
    let degrau ="";
    for(let i=0; i< degraus; i++){
        degrau = "";
        for(let j=0;j < degraus - 1 - i; j++){
            degrau+=" ";
        }
        for(let j=0;j <= i; j++){
            degrau+="#";
        }
        console.log(degrau);
        degrau="";
    }
}