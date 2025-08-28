const imagem = document.getElementById('image');
const mensagem = document.getElementById('mensagem');

imagem.addEventListener('mouseover', function() {
    mensagem.textContent='você passou o mouse na imagem'
    mensagem.addEventListener('mouseout', function() {
        mensagem.textContent=''

    });
    mensagem.style.fontSize = '50px'
});