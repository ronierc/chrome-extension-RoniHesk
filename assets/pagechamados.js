(async () => {
  const configUser = await window.initStorage();


// Cria o icone 
let linkTag = document.createElement('link');
// Define os atributos da tag
linkTag.rel = 'icon';
linkTag.href = 'https://img.icons8.com/?size=40&id=33083&format=png'; // Substitua pelo caminho do seu ícone
// Adiciona a tag <link> ao <head> do documento
document.head.appendChild(linkTag);

document.querySelector('table thead th:nth-child(5)').remove(); //Remove a coluna a mais no topo


// Seleciona o elemento (nesse caso, o root)
const root = document.documentElement;
//Altera a cor usada no css
root.style.setProperty('--corPadrao', configUser.corPadrao);

//Remove to topo com as estatisticas
if (!configUser.dash) {
	document.querySelector('.row').remove();
	document.querySelector('div div').remove()
}

if (configUser.escolha != 'TODOS') {
	// Filtra os analistas que NÃO são do setor escolhido:
	const analistasRemover = analistasData.filter(analista => analista.setor !== configUser.escolha);

	// Percorre todos os itens na tabela:
	document.querySelectorAll('table .td-left').forEach((item) => {
	  let texto = item.innerText.trim();
	  
	  for (let analista of analistasRemover) {
	    if (texto.includes(analista.nome.split(' ').pop()) || texto.includes(analistasRemover[0].setor)) { // Confere se contém o sobrenome
	      item.closest('tr').remove(); // Remove a linha da tabela
	      break;
	    }
	  }
	});
}

const imgUrl = chrome.runtime.getURL('./assets/img/astro.png');
document.body.innerHTML += ` 
    <img src="${imgUrl}" alt="astro" id="astro">
    <div id="toast" class="toast">
      <span id="toast-message"></span>
    </div>`;
// Adiciona o atributo idanalista em cada item:
document.querySelectorAll('table .td-left').forEach((item) => {
  let texto = item.innerText.trim();
  for (let analista of analistasData) {
    if (texto.includes(analista.nome.split(' ').pop())) {
      item.id = 'idanalista-' + analista.id;
      item.innerHTML += ` <div>
        <a href="https://suporte.suprasys.com.br/intranet/admin/show_tickets.php?suporte=${analista.id}&status1=true,true,true,false,false,false,true&sort=status&g=owner&category=0&limit=1000&asc=0&cot=1&more=1" target="_blank">🚀</a>
        <div>`;
      break;
    }
  }
});



//Aumenta o campo CONSULTORES SUPORTE
document.querySelectorAll('table tbody tr')[2].children[0].colSpan = 5;


// Chama a função para substituir as cores quando a página estiver completamente carregada 
document.querySelector('.table-top').style.backgroundColor = configUser.corPadrao;
var elementos = document.getElementsByTagName('*');
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var corDeFundo = window.getComputedStyle(elemento, null).getPropertyValue('background-color');

    if (
    	corDeFundo === 'rgb(90, 122, 248)' || corDeFundo === 'rgba(90, 122, 248, 1)' ||
    	corDeFundo === 'rgb(155, 0, 0)' || corDeFundo === 'rgba(155, 0, 0, 1)' ||
    	corDeFundo === 'rgb(114, 255, 117)' || corDeFundo === 'rgba(114, 255, 117, 1)') {
        elemento.style.backgroundColor = configUser.corPadrao;
        elemento.style.color = '#f4f4f4';
        elemento.style.borderColor = '#000';
    }
}


function showToast(message, duration) {
    var toast = document.getElementById('toast');
    var toastMessage = document.getElementById('toast-message');

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(function () {
        toast.classList.remove('show');
    }, duration || 3000);
}

document.getElementById('astro').addEventListener('click', function () {
    showToast('Se clicou paga uma cerveja pro Roni!', 5000);
    document.getElementById('astro').src = "https://raw.githubusercontent.com/ronierc/ronier/12f9d513f539ace625e1482ea615cd69fd65f8dd/imagens/roni_rosto_svg.svg";
});



})();