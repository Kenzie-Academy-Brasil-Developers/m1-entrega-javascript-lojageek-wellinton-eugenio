let listFigures = [];
let listFrames = [];

function separarItens(lista){
    for(let i = 0; i<lista.length; i++){
        let itemAtual = lista[i]
        if(itemAtual.type === "action"){
        listFigures.push(itemAtual)
        } else if(itemAtual.type === "frame"){
        listFrames.push(itemAtual)
        }

    }
    return`Separacao concluida`
}

separarItens(itensDaLoja)

const sectionFigures = document.getElementsByClassName("listFigures");

const sectionFrames = document.getElementsByClassName("listFrames");

function listarItens(itens, local){
    for(let i = 0; i < itens.length; i++){
        
        let itemAtual = itens[i];

        let cardPronto = criarCard(itemAtual);
          
        local.appendChild(cardPronto)
    }
    
    

}

listarItens(listFigures, sectionFigures);
//listarItens(listFrames, sectionFrames);

function criarCard(item){
    let imagem = item.imagem;
    let nome   = item.name;
    let preco  = item.price
    let type   = item.type

    let tagLi    = document.createElement("li");
    let tagImg   = document.createElement("img");
    let tagNome  = document.createElement("h3")
    let tagPrice = document.createElement("p")

    tagImg.src = `./assets/img/${imagem}`
    tagImg.alt = nome
    tagNome.innerText = nome
    tagPrice.innerText = `R$:${preco},00`
 
    tagLi.append(tagImg, tagNome, tagPrice)


    return tagLi
}


