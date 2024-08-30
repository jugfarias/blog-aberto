document.addEventListener('DOMContentLoaded', function() {
    // chama a função addPost quando o botão 'publicar' é clicado
    document.getElementById('publicar').addEventListener('click', addPost);
       
    // função addPost
    function addPost() {
        // constante que recebe o valor do input 'título'
        const titulo = document.getElementById('post-titulo').value;

        // constante que recebe o valor do input 'conteúdo'
        const conteudo = document.getElementById('post-conteudo').value;

        // cria um novo elemento HTML <article>, que será utilizado como o contêiner do novo post
        const postElemento = document.createElement('article');

        // define o conteúdo HTML do novo post
        postElemento.innerHTML = `
            <h3>${titulo}</h3>
            <p>Data da publicação: <time>${new Date().toLocaleDateString()}</time></p>
            <p>${conteudo}</p>
            <button class="excluir-post" onclick="excluirPost(this)"> 
                <img class="lixeira"  src="img/trash-can.png" alt="ícone de lata de lixo">
            </button>
            <div class="form-comentario">
                <label for="comentario">Comentário:</label>
                <textarea id="comentario" class="comentario-input" placeholder="Deixe seu comentário..."></textarea>
                <button class="adicionar-comentario" onclick="adicionarComentario(this)">Comentar</button>
            </div>
            <div class="comentarios"></div>
        `;

        // obtém a seção da página que contém todos os posts, identificada pelo ID 'post'
        const postsSection = document.getElementById('post');

        // obtém o primeiro filho (elemento) dentro da seção 'post'
        const primeiroPost = postsSection.firstChild;

        // insere o novo post antes do primeiro post
        postsSection.insertBefore(postElemento, primeiroPost);

        // reseta o formulário
        document.getElementById('post-form').reset();


    }

    // função excluirPost que pode ser acessada de qualquer lugar do código (window)
    window.excluirPost = function(button) {
        // obtém o elemento <article> que contém o botão clicado
        const postElemento = button.closest('article');

        // remove o elemento <article> do DOM
        postElemento.remove();
    }

    window.adicionarComentario = function(button) {
        // obtém o elemento <article> que contém o botão clicado
        const postElemento = button.closest('article');

        // obtém o elemento <div> que contém os comentários
		const comentariosDiv = postElemento.querySelector('.comentarios');

        // obtém o valor do input de comentário
		const comentarioInput = postElemento.querySelector('.comentario-input');

        // cria um novo elemento HTML <p> que será utilizado como o contêiner do novo comentário
		const comentario = comentarioInput.value.trim();

        // se comentário diferente de vazio
        if(comentario != '') {
            // cria um novo elemento HTML <p> que será utilizado como o contêiner do novo comentário
            const comentarioElemento = document.createElement('p');

            // define o conteúdo HTML do novo comentário
            comentarioElemento.textContent = comentario;

            // insere o novo comentário dentro da seção de comentários
			comentariosDiv.appendChild(comentarioElemento);

            // reseta o input de comentário
			comentarioInput.value = '';
        }

    }

    

});


