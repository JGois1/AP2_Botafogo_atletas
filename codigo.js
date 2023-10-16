//const ingrid = atletas[0];

const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
}

atletas.forEach((atleta) => {cria_cartao(atleta)});

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