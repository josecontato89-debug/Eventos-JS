console.log(document.body);

console.log(document.body.childNodes[1]);

//selecionar por tag
const ListaItens = document.getElementsByTagName('li')
console.log(ListaItens);

//para pegar o elemento btn e usar evento de escuta click com um pop up (alert)
 const botao = document.getElementById('btn');
 botao.addEventListener('click', function() {
     alert("Você clicou no botão!")
 });

const  cor = document.getElementById('btn');
 cor.addEventListener('click',function(){
    document.body.style.backgroudColor = 'green'
    
})