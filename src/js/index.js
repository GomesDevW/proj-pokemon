const botaoAlterarTema = document.querySelector('#botao-alterar-tema')
const body = document.querySelector('body')
const imgBotaoTroca = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () =>{
    body.classList.toggle('modo-escuro')

    if(body.classList.contains('modo-escuro')){
        imgBotaoTroca.setAttribute('src', './src/images/moon.png')
    } else {
        imgBotaoTroca.setAttribute('src', './src/images/sun.png')
    }
    
})