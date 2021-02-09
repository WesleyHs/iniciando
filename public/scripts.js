//selecionar o modal-overlay e fazer o close e open
const modalOverlay = document.querySelector('.modal-overlay') //pega a classe
const cards = document.querySelectorAll('.card')//pega coleção de valores iguais

for (let card of cards) {
    // ouvidor de eventos 
    //Ativar o active
    card.addEventListener("click", function () {
        // id do video
        const videosId = card.getAttribute("id")
        //redirecionando para page
        window.location.href = `/video?id=${videosId}`
    })
}

// fechar nn precisa colocar a const 
// remover o active
document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""

})


