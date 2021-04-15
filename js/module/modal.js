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

    contanierModal.addEventListener('click', verificaClick);
    btnAtivar.addEventListener('click', ativaModal);
    fechar.addEventListener('click', fechaModal);

}