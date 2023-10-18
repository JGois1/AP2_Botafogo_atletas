//const ingrid = atletas[0];

const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    //aplicando css aqui nas divs
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    container_atleta.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif';
    container_atleta.style.borderRadius = '5px';
    
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    
    const imagem = document.createElement('img');
    imagem.style.borderRadius = '5px';
    imagem.src = atleta.imagem;
    imagem.alt = `foto de ${atleta.nome}`; // criando imagem alternativa na img
    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
}

/* 
3 TIPOS DIFERENTES DE LOOPS (OS 3 DÃO CERTO IGUAL) ->
1º MAIS SIMPLES
 atletas.forEach((atleta) => {cria_cartao(atleta)});
*/
/*
2º WHILE, VERSÁTIL
let indice = 0; //criando contador

while (indice < atletas.length){
    cria_cartao(atletas[indice]);
    console.log(indice);
    indice++;
}
*/
/*
// 3º MAIS UNIVERSAL
for(let indice =0;indice < atletas.length;indice++){  // em vez de indice podemos escrever i, como no python/c++
    cria_cartao(atletas[indice]);
    console.log('loop for', indice);
}
*/

//4º IGUAL O DO PYTHON
for(const atleta of atletas){
    cria_cartao(atleta);
    console.log('loop for of', atleta.id);
}


/*
const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('div#container > img');
const espaco_descricao = document.querySelector('div#container > p');

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_descricao.innetText = atleta.descricao;
}

preenche(atletas[3]);
*/