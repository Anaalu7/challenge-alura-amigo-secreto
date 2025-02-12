// Declarando uma Array para armazenar os amigos;
let amigos = [];

//Função para adicionar um amigo
function adicionarAmigo() { 
    let nomeAmigos = document.querySelector('input').value; //Capturando o valor inserido
    
    //Validando a entrada
    if (nomeAmigos === '') {
        alert (`Por favor, insira um nome`);
        return; // Impede que continue se o campo estiver vazio
    }
    
    // Adiciona o nome na lista
    amigos.push(nomeAmigos);

    // Atualiza a lista de amigos
    atualizarListaAmigos();

    // Limpa o campo de entrada
    limparCampo();
   
   
}
//Função que atualiza a lista de amigos
function atualizarListaAmigos() { 
    let lista = document.getElementById('listaAmigos'); // Obtem a lista de amigos que será exibido
    lista.innerHTML = ''; // Limpa a lista ao atualizar

    //Adiciona uma <li> a cada nome
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        lista.appendChild(item); //Adiciona o <li> à <ul>
    }
}

//Seleção aleatória de amigos
function sortearAmigo() {
    if (amigos.length === 0 ) {
        alert('Adicione um nome.')
    } else {
        let sorteioAmigos = Math.floor(Math.random() * amigos.length); //Geração de índice aleatório
        document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigos[sorteioAmigos]}`;

        }        
    }
        
//Limpando o campo após entrada
function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}