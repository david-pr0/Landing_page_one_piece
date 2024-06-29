document.addEventListener('DOMContentLoaded', function(){
    const crews = document.querySelectorAll('[data-tab-crew]');
    for (let i = 0; i < crews.length; i ++) {
        crews[i].addEventListener('click', function(crew) {
            console.log(crew);
            const abaAlvo = crew.target.dataset.tabCrew;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            ocultaAba();
            aba.classList.add('pirates__content__item--is-selected');
        })
    }

    function ocultaAba () {
        const aba = document.querySelectorAll('.pirates__content__item');
        
        for (let i = 0; i < aba.length; i++) {
            aba[i].classList.remove('pirates__content__item--is-selected')
        }
    }

})