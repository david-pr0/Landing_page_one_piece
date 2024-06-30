document.addEventListener('DOMContentLoaded', function(){
    const crews = document.querySelectorAll('[data-tab-crew]');
    for (let i = 0; i < crews.length; i ++) {
        crews[i].addEventListener('click', function(crew) {
            console.log(crew);
            const abaAlvo = crew.target.dataset.tabCrew;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            const conteudoAlvo = crew.target.dataset.tabHistory;
            const conteudo = document.querySelector(`[data-history-id=${conteudoAlvo}]`);
            ocultaAba();
            ocultaConteudo();
            aba.classList.add('pirates__content__item--is-selected');
            conteudo.classList.add('resumo__content--is-selected');
        })
    }

    function ocultaAba () {
        const aba = document.querySelectorAll('.pirates__content__item');
        
        for (let i = 0; i < aba.length; i++) {
            aba[i].classList.remove('pirates__content__item--is-selected');
        }
    }

    function ocultaConteudo () {
        const conteudo = document.querySelectorAll('.resumo__content');

        for (let i = 0; i < conteudo.length; i ++) {
            conteudo[i].classList.remove('resumo__content--is-selected');
        }
    }

})