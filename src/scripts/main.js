document.addEventListener('DOMContentLoaded', function(){
    const crews = document.querySelectorAll('[data-tab-crew]');


    //seção piratas
    for (let i = 0; i < crews.length; i ++) {
        crews[i].addEventListener('click', function(crew) {
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

    //seção episódios
    const select = document.querySelector('.eps__select');
    select.addEventListener('change', function(temps) {
        const tempAlvo = temps.target.options[temps.target.selectedIndex];
        const temp = tempAlvo.getAttribute('data-tab-ep');
        const ep = document.querySelector(`[data-ep-id=${temp}]`);
        ocultaTemporada();
        ep.classList.add('eps__watch--is-active')
    });

    //funções
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

    function ocultaTemporada () {
        const temporada = document.querySelectorAll('.eps__watch');

        for (let i = 0; i < temporada.length; i ++) {
            temporada[i].classList.remove('eps__watch--is-active');
        }
    }

})