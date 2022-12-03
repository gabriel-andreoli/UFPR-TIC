/* Abre e fecha menu lateral em modo mobile */ 

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
})

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active"))
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
    })    
});

// Animar todos os itens na tela que tiveram o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach(element =>{
        if (windowTop > element.offsetTop){
            element.classList.add('animate');   
        }else{
            element.classList.remove("animate");
        }    
    });
};

window.addEventListener("scroll", ()=>{
    animeScroll();
});

//Ativar o carregamento do botão enviar

const btnEnviar = document.querySelector('#enviar')
const btnEnviarLoad = document.querySelector('#enviar-load')

function VerTamanho(){
    const nome = length.document.querySelector('#nome')
    return nome
}

btnEnviar.addEventListener("click", () => {
    sla = VerTamanho()
    if (sla > 0){
        btnEnviar.style.display = "none";
        btnEnviarLoad.style.display = "block";
    }
});


//function TamanhoCampos() e => {
    //const nome = e.target.nome.value
    //const email = e.target.email_usuario.value
   // const mensagem = e.target.mensagem.value
    //if (nome.length > 0 && email.length > 0 && mensagem.length > 0){
        //return true
    //};
//};

//Tirar a mensagem de sucesso depois de 5 segundos

//setTimeout(() =>{

//})