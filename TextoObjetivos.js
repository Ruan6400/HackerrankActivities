function ListaTextos(){
    //pegar os paragrafos com o texto do objetivo da materia
    let ObjTxt = document.querySelectorAll("h4.tab-subtitle+p:has(+h4)");
    
    //pegar o strong com o nome da materia
    let NomeMateria = document.querySelectorAll("div.tab-grid-content-header>strong:has(+strong)");
    
    //essa variavel vai obter os textos dos objetivos das materias
    let Objetivos = [];
    
    
    for(i=0;i<NomeMateria.length;i++){
        console.log(NomeMateria[i].innerHTML);
        console.log(ObjTxt[i].innerHTML);
        Objetivos.push(ObjTxt[i].innerHTML);
    }
    return Objetivos;
}