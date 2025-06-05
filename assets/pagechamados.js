// Cria o icone 
let linkTag = document.createElement('link');
// Define os atributos da tag
linkTag.rel = 'icon';
linkTag.href = 'https://img.icons8.com/?size=40&id=33083&format=png'; // Substitua pelo caminho do seu ícone
// Adiciona a tag <link> ao <head> do documento
document.head.appendChild(linkTag);

document.querySelector('table thead th:nth-child(5)').remove(); //Remove a coluna a mais no topo

//Remove to topo com as estatisticas
if (configUser.dash == 'N') {
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

// Adiciona o atributo idanalista em cada item:
document.querySelectorAll('table .td-left').forEach((item) => {
  let texto = item.innerText.trim();
  for (let analista of analistasData) {
    if (texto.includes(analista.nome.split(' ').pop())) {
      item.id = 'idanalista-' + analista.id;
      item.innerHTML += ` <div>
        <a href="https://suporte.suprasys.com.br/intranet/admin/show_tickets.php?suporte=${analista.id}&status1=true,true,true,false,false,false,true&limit=100" target="_blank">🚀</a>
        <div>`;
      break;
    }
  }
});


//Aumenta o campo CONSULTORES SUPORTE
document.querySelectorAll('table tbody tr')[2].children[0].colSpan = 5;


// Chama a função para substituir as cores quando a página estiver completamente carregada 
document.querySelector('.table-top').style.backgroundColor = configUser.corPadrão;
var elementos = document.getElementsByTagName('*');
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var corDeFundo = window.getComputedStyle(elemento, null).getPropertyValue('background-color');

    if (
    	corDeFundo === 'rgb(90, 122, 248)' || corDeFundo === 'rgba(90, 122, 248, 1)' ||
    	corDeFundo === 'rgb(155, 0, 0)' || corDeFundo === 'rgba(155, 0, 0, 1)' ||
    	corDeFundo === 'rgb(114, 255, 117)' || corDeFundo === 'rgba(114, 255, 117, 1)') {
        elemento.style.backgroundColor = configUser.corPadrão;
        elemento.style.color = '#f4f4f4';
        elemento.style.borderColor = '#000';
    }
}
