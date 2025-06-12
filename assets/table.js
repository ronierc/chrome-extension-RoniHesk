//If abaixo valida se esta na home.
if ((document.getElementById('cke_message') == null) && document.querySelector('form[name="showt"]') !== null){
  document.querySelectorAll('br').forEach((item) => { item.remove(); });

const diferencaDatas = (d1, d2) => {
  let str1= d1.split('/'); //Transforma a data em vetor 
  let str2 = '';

  //                yyyy   , mm       , dd
  let t1 = new Date(str1[2], str1[1]-1, str1[0]); //Coloca a data na ordem certa
  let t2 = '';
  
  if(d2 == null || d2 == ''){ //Se não receber a data 2, pega a data do dia
      t2 = new Date();
  } else {
      str2 = d2.split('/');
      t2 = new Date(str2[2], str2[1]-1, str2[0]);
  }

  return Math.floor((t2-t1)/(24*3600*1000));
};

//Altera a coluna Chamado Ativo/Online para a quantidade de dias que o chamado está em aberto
document.querySelectorAll('table.white td:nth-child(11)').forEach((item) => {
  item.style.width = '50px';
  item.style.fontSize = '90%';
  item.innerHTML = `
    <span title="Dias em Aberto">
      ${diferencaDatas(item.parentNode.querySelector('table.white td:nth-of-type(3)').innerText)}
    </span>
    <img src="https://img.icons8.com/?size=256&id=80585&format=png" title="Atualizado à: ${item.parentNode.querySelector('table.white td:nth-of-type(4)').innerText}" width="15px">
  `;
})

  //Tabela de Chamados
document.querySelectorAll('table.white td:first-child').forEach((item) => { item.style.display = 'none'; }); //Remove o check de seleção
document.querySelectorAll('table.white th:first-child').forEach((item) => { item.style.display = 'none'; }); //Remove o check de seleção
document.querySelectorAll('table.white th:nth-of-type(4)').forEach((item) => { item.remove(); });
document.querySelectorAll('table.white td:nth-of-type(4)').forEach((item) => { item.remove(); });
document.querySelectorAll('table.white td:nth-child(11)').forEach((item) => { item.remove() }); //Remove coluna tipo chamado
document.querySelectorAll('table.white th:nth-child(11)').forEach((item) => { item.remove() }); //Remove coluna tipo chamado

}// END If abaixo valida se esta na home.

let icone = 'https://suporte.suprasys.com.br/intranet/admin/img/favicon.ico';

//Valida tela- se esta na pagina de chamados e se tem SL ou se é outra pagina
let tela = document.getElementById('view1') != null ? "chamado" : "outra";
let numSL = document.getElementById('area_solicitacao') != null ? document.querySelector('#area_solicitacao').children[0].innerText.replace(/\D/g, '') : null;
console.log(tela + ' -- ' + numSL)

var nomeEmpresa = ''
if (tela == 'chamado'){
  nomeEmpresa = document.querySelector('img[src="img/telefone_empresa.png"]').parentElement.children[0].innerText.replace('(Implantação)', '');

  icone = 'https://img.icons8.com/?size=80&id=wsA6b0gWRtPP&format=png'; // Substitua pelo caminho do seu ícone

  var campo = '';
  document.querySelectorAll('.tabcontent td').forEach((item) => {
      let texto = item.innerText.trim();
      if (texto.includes('Num. Protocolo:')) {
        campo = item.parentElement.children[1];  
        campo.classList.add('protocolo');
      }
  });
  var ticket = campo.innerText.replace(' (Número do ticket: ', '_').replace(') ', '');
  document.querySelector('title').innerText = 'CH: '+ ticket.split('_')[1] + ' - ' + nomeEmpresa
  campo.innerHTML = `<a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">CH ${ticket.split('_')[1]}</a></a>`;
  if (numSL > 0){
    campo.innerHTML += ` <a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">SL ${numSL}</a>`;
  } 
  document.getElementById('setasMenu').innerHTML += ` <div class="chMenu">${document.querySelectorAll('.protocolo')[1].outerHTML}<div style="display: none;" id="chMenu"></div></div>`;

}

// Copia numero da solicitação para o header
if (numSL > 0){
  let numero = document.querySelector('#area_solicitacao').children[0].innerText.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  numSL = numero;
  document.querySelector('title').innerText = 'SL: '+ numero + ' - ' + nomeEmpresa

  icone = 'https://img.icons8.com/?size=80&id=UmF1v-dFKf1k&format=png'; // Substitua pelo caminho do seu ícone
}

document.getElementById('chMenu').innerHTML = `<a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">${document.querySelector('title').innerText}</a></a>`;

// Cria o icone
let linkTag = document.createElement('link');
// Define os atributos da tag
linkTag.rel = 'icon';
linkTag.href = icone
// Adiciona a tag <link> ao <head> do documento
document.head.appendChild(linkTag);

// Seleciona e adiciona o evento
document.querySelectorAll('.chMenu').forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        copiarHTML(elemento.lastChild);
    });
});

// Função de cópia
function copiarHTML(elemento) {
    const conteudoHTML = elemento.innerHTML;
    const blob = new Blob([conteudoHTML], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    navigator.clipboard.write([clipboardItem])
        .then(() => {
            // Adiciona a classe de destaque
            elemento.parentElement.classList.add('copiado');
            
            // Remove a classe depois de 5 segundos
            setTimeout(() => {
                elemento.parentElement.classList.remove('copiado');
            }, 5000);
        })
        .catch(err => {
            console.error('Erro ao copiar o conteúdo HTML: ', err);
        });
}

