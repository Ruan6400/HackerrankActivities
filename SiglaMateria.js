function PegaSigla(){
    //aqui estou so obtendo as divs que estao as siglas
    let Siglas = document.querySelectorAll("div.tab-grid-content-header");
    let Siglatexto=[];
    let SiglatextoConvertido = [];
    
    //este FOR e para pegar todo o conteudo das divs e converter para texto dentro do array Siglatexto
    for(let i=0;i<Siglas.length;i++)
    {Siglatexto.push(Siglas[i].innerHTML);}
    
    //aqui e onde separo o texto da sigla dos elementos
    //esse primeiro for e para eu verificar div por div do Array Siglas
    for(let i=0;i<Siglas.length;i++){
        let Sigla="";
        let l=0;
        
        
        //Este for e para observar letra por letra de cada elemento do array Siglatexto (Siglatexto eh um array de strings)
        for(let j=0;j<Siglatexto[i].length;j++){
            
            /*quando eu achar o "|",
            eu vou saber onde esta a
            sigla*/
            if(Siglatexto[i][j] == "|"){
                l=j;//guardar a posicao do "|"
                j=Siglatexto[i].length;//sair dessa estrutura de repeticao
            }
        }
        
        /*A sigla fica sempre a 2 posicoes depois do "|"
        portanto o j deve comecar do l+2
        A sigla e sempre composta por 6 caracteres, entao
        se o comeco e j+2, o final tem que ser j+8*/
        for(let j=l+2;j<l+8;j++){
        Sigla+=Siglatexto[i][j];/*adicionar o string da sigla na variavel Sigla*/
        }
        SiglatextoConvertido.push(Sigla);
    }
    return SiglaTextoConvertido;
    
}
    
