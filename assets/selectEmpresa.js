const select = document.getElementById('userid');

// Cria o campo de busca dinamicamente
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Digite para buscar...';
searchInput.classList.add('form-control', 'mb-2');

// Insere o campo de busca antes do select
select.parentNode.insertBefore(searchInput, select);

// Adiciona o listener de busca
searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();

    // Itera por todas as opções
    for (let option of select.options) {
        const optionText = option.text.toLowerCase();

        // Mostra se corresponder
        if (optionText.includes(searchText)) {
            option.hidden = false;
        } else {
            option.hidden = true;
        }
    }

    // Se houver correspondências, seleciona a primeira visível
    const visibleOptions = Array.from(select.options).filter(opt => !opt.hidden);
    if (visibleOptions.length > 0) {
        select.value = visibleOptions[0].value;
        select.dispatchEvent(new Event('change')); // Dispara o onchange
    }
});