const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.cabecalho-principal')
const principal = document.querySelector('.principal')

botao.addEventListener('click', () =>{
    botao.classList.add('ativo')
    menuLateral.classList.add('ativo')
    principal.classList.add('ativo')
})

menuLateral.addEventListener('click', () =>{
    botao.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    principal.classList.remove('ativo')
})