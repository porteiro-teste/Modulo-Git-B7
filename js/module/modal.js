export default function modal() {
    const contanierModal = document.querySelector('.contanierModal');
    const btnAtivar = document.querySelector('[data-ativa]');
    const fechar = document.querySelector('.fechar');

    function ativaModal(e) {
        contanierModal.setAttribute('data-modal-ativa', '')
    }
    function fechaModal(e) {
        contanierModal.removeAttribute('data-modal-ativa');
    }
    function verificaClick(e) {
        if (e.target === this) {
            fechaModal(e);
        }
    }
    function bugModal(){
        const textoBug = 'Há um bug na modal, volte mais tarde :(';
        console.log(textoBug);
    }
    contanierModal.addEventListener('click', verificaClick);
    btnAtivar.addEventListener('click', ativaModal);
    fechar.addEventListener('click', fechaModal);

}