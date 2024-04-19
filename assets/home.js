//If abaixo valida se esta na home. 
if ((document.getElementById('cke_message') == null) && document.querySelector('form[name="showt"]') !== null){
  
  document.querySelectorAll('br').forEach((item) => { item.remove(); });

  //Captura a div Mostrar Tickets e já remove
  const showt = document.querySelector('form[name="showt"]').parentElement.innerHTML;
  document.querySelector('form[name="showt"]').parentElement.parentElement.parentElement.parentElement.style.display = 'none';

  //Captura a div buscar chamados e já remove
  const buscat = document.querySelector('select[name="sel_suporte"]').parentElement.parentElement.innerHTML;
  document.querySelector('select[name="sel_suporte"]').parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';

  //Captura a div buscar chamados e já remove
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
    <button class="btn btn-default inputMenu" id="iframeChamados" style="padding: 6px 12px;font-size: 14px;">Chamados</button>
  `;

  //Modal para filtrar os chamados exibidos
  document.querySelector('.enclosing').innerHTML += `
  <div class="jumbotron jumbHelp" id="jbBusca" style="display: none;">
    <img id="closeJumbotron" src="https://img.icons8.com/?size=256&id=rmf1Fvj5nBib&format=png"/>
    <div></div>
  </div>
<div class="jumbotron jumbHelp" id="jbChamados" style="padding:10px;display: none;overflow: hidden;">
  <img id="closeJumboChamados" src="https://img.icons8.com/?size=256&id=rmf1Fvj5nBib&format=png"/>
  <div>
    <iframe id="iChamados" src="https://suporte.suprasys.com.br/.chamados/" width="100%" style="height:80vh; border:none;">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
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

//Incluir iframe do .chamados 
document.querySelector('.online').innerHTML += `
`;
//Jumbotron de chamados
setTimeout(() => {
document.querySelector('#iframeChamados').addEventListener('click', () => {
  document.querySelector('#jbChamados').style.display = 'block';
});
document.getElementById('closeJumboChamados').addEventListener('click', () => {
  document.querySelector('#jbChamados').style.display = 'none';
});
}, 300);

if ((document.querySelector('#iChamados')) !== null){
  setInterval(() => {
    document.querySelector('#iChamados').contentWindow.document.querySelector('body').innerHTML += `
    <style>

      table{
        font-size: .9em !important;
      }
      .col-md-12{
        padding: 0 !important;
      }
      .row{
        width:100% !important;
        margin:0 !important;
      }

      *::-webkit-scrollbar-track { background-color: #4a5571; }
      *::-webkit-scrollbar { width: 5px; background: #4a5571; }
      *::-webkit-scrollbar-thumb { background: #BD93F9; }
      *::-webkit-scrollbar-corner { background: #BD93F9; }
    </style>`;
  }, "3000");
  

}



}// END If abaixo valida se esta na home.