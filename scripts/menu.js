document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');
    const overlay = document.getElementById('overlay-menu');
    
    btnMenu.addEventListener('click', function () {
        menuMobile.classList.add('abrir-menu');
        overlay.style.display = 'block';
    });
    
    btnFechar.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});

// Obter elementos
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const openModalMenu = document.getElementById("openModalMenu"); // Novo para o menu

// Quando clicar no botão "Contato", exibe o modal
openModalBtn.onclick = function() {
    modal.style.display = "flex"; // Exibe o modal
}

// Quando clicar no item "Contato" do menu, exibe o modal
openModalMenu.onclick = function(event) {
    event.preventDefault(); // Impede comportamento padrão de navegação
    modal.style.display = "flex"; // Exibe o modal
}

// Quando clicar no 'x' (fechar), oculta o modal
closeModalBtn.onclick = function() {
    modal.style.display = "none"; // Oculta o modal
}

// Quando clicar fora do conteúdo do modal, também fecha
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
