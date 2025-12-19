//If abaixo valida se esta na home. 
if ((document.getElementById('cke_message') == null) && document.querySelector('form[name="showt"]') !== null){

  //Remove a o~pção altera todos os chamados para resolvido
  document.querySelector('select[name="a"]').parentElement.parentElement.style.display = 'none';
  
  document.querySelectorAll('br').forEach((item) => { item.remove(); });

  //Captura a div Mostrar Tickets e já remove
  const showt = document.querySelector('form[name="showt"]').parentElement.innerHTML;
  document.querySelector('form[name="showt"]').parentElement.parentElement.parentElement.parentElement.style.display = 'none';

  //Captura a div buscar chamados e já remove
  const buscat = document.querySelector('select[name="sel_suporte"]').parentElement.parentElement.innerHTML;
  document.querySelector('select[name="sel_suporte"]').parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';

  //Captura a div buscar chamados e já remove
    document.querySelector('#topSubmit2').style.display = 'none'
  document.querySelector('#divShow2').style.display = 'block'
  const achat = document.querySelector('form[name="findby"]').parentElement.innerHTML;
  document.querySelector('form[name="findby"]').parentElement.parentElement.parentElement.parentElement.style.display = 'none';

  //Cria botão no menu com os buscadores
  document.querySelector('#groupMenu').innerHTML += `
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default inputMenu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Buscas <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" style=" padding: 10px; color: #ccc;">
        <li><a id="mostraTicket" href="#">Mostrar tickets</a></li>
        <li><a id="buscaTicket" href="#">Buscar chamados por suporte ou empresa</a></li>
        <li><a id="achaTicket" href="#">Achar um ticket</a></li>
      </ul>
    </div>
  `;

  //Modal para filtrar os chamados exibidos
  document.querySelector('.enclosing').innerHTML += `
  <div class="jumbotron jumbHelp" id="jbBusca" style="display: none;">
    <img id="closeJumbotron" src="https://img.icons8.com/?size=256&id=rmf1Fvj5nBib&format=png"/>
    <div></div>
  </div>
`;

document.getElementById('closeJumbotron').addEventListener('click', () => {
  document.querySelector('#jbBusca').style.display = 'none';
});
document.getElementById('mostraTicket').addEventListener('click', () => {
  document.querySelector('#jbBusca').style.display = 'block';
  document.querySelector('#jbBusca div').innerHTML = showt;
});
document.getElementById('buscaTicket').addEventListener('click', () => {
  document.querySelector('#jbBusca').style.display = 'block';
  document.querySelector('#jbBusca div').innerHTML = buscat;
});
document.getElementById('achaTicket').addEventListener('click', () => {
  document.querySelector('#jbBusca').style.display = 'block';
  document.querySelector('#jbBusca div').innerHTML = achat;
});



}// END If abaixo valida se esta na home.

