let amigoSecreto = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');

    //Validação: o campo não pode estar vazio
    if (amigo.value.trim() == ''){
        return alert('Por favor, insira um nome.');
    } else if (amigoSecreto.includes(amigo.value)){ //Validação: o nome já existe na lista.
        return alert('Este nome já foi adicionado a lista, por favor insira um novo nome.')
    }
    //Adiciona o nome ao array.
    amigoSecreto.push(amigo.value); 
    
    atualizarLista();
    
    //Limpa o campo de entrada
    amigo.value = '';
}

function atualizarLista() {
    let listaCriada = document.getElementById('listaAmigos');
    listaCriada.innerHTML = ''; //Limpar lista

    amigoSecreto.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaCriada.appendChild(itemLista);

    });

}

function sortearAmigo() {
    if (amigoSecreto.length < 2){
        return alert("Adicione mais um nome para sortear. Boa sorte!")
    }
    
    let amigoEscolhido = Math.floor(Math.random() * amigoSecreto.length); //Math.floor() arredonda o valor para baixo, garantindo um número inteiro que represente um índice válido.
    let amigoDaLista = amigoSecreto[amigoEscolhido];

    document.getElementById('resultado').innerHTML = `O amigo sorteado é: <strong>${amigoDaLista}<strong>`;
}

function reiniciar() {
    //Limpar lista
    amigoSecreto = [];
    atualizarLista();

    //Limpar o campo de entrada.
    document.getElementById('amigo').value = '';

    //Limpar o campo de resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

}