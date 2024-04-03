function TextoEmenta(){
    //pegar os elementos com o texto das ementas
    let Ementa = document.querySelectorAll("p+h4.tab-subtitle+p");
    let TxtEmenta = [];
    for(let i=0;i< Ementa.length;i++){
        TxtEmenta.push(Ementa[i].innerHTML);
    }
    return TxtEmenta;
}