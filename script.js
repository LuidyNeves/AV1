function buscarFilme() { // Função para buscar o filme
    console.log("buscarFilme foi acionado");
    const filme = document.getElementById("busca").value; // Pega o valor do input de busca lá do HTML
    const api_pesquisa = `http://www.omdbapi.com/?t=${filme}&apikey=790af7bc`; // URL da API + o filme que o usuário digitou
    console.log("Pesquisa feita");
    fetch(api_pesquisa) // Faz a requisição

    // Transforma a resposta em JSON
    .then(function(response) {
            return response.json(); // Retorna o JSON, com a resposta da API: False ou True
        })
        // .then serve para pegar o JSON e transformar em um objeto
        .then(function(data) {

            if (data.Response == 'False') { // se o filme não for encontrado
                document.getElementById("descricao").innerHTML = "Filme não encontrado! Digite novamente";
                document.getElementById("titulo").innerHTML = ""; // document.getElementById serve para pegar o elemento HTML a partir do ID, e alterar o seu conteúdo 
                document.getElementById("sinopse").innerHTML = ""; // O innerHTML serve para alterar o conteúdo do elemento HTML
                document.getElementById("duracao").innerHTML = "";
                document.getElementById("tipo").innerHTML = "";
                document.getElementById("ano").innerHTML = "";
                document.getElementById("diretor").innerHTML = "";
                document.getElementById("escritor").innerHTML = "";
                document.getElementById("nota").innerHTML = "";
                document.getElementById("banner").style.backgroundImage = `url(./img/choro.png)`; // Altera a imagem do banner



            } else { // Se o filme existir, retorna os dados do filme
                console.log(data); // Mostra no console o que foi retornado
                // Usando document.getElementById para pegar o elemento HTML a partir do ID, e alterar o seu conteúdo com os dados do filme
                document.getElementById("descricao").innerHTML = "";
                document.getElementById("titulo").innerHTML = data.Title;
                document.getElementById("sinopse").innerHTML = data.Plot;
                document.getElementById("duracao").innerHTML = data.Runtime;
                document.getElementById("tipo").innerHTML = data.Type;
                document.getElementById("ano").innerHTML = data.Year;
                document.getElementById("diretor").innerHTML = "<strong>Dirigido por:</strong>" + ` ${data.Director}`;
                document.getElementById("escritor").innerHTML = "<strong>Escrito por:</strong>" + ` ${data.Writer}`;
                document.getElementById("nota").innerHTML = data.imdbRating;
                document.getElementById("banner").style.backgroundImage = `url(${data.Poster})`;
            }
        })
}