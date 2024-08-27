//Menu
//Captura o conteudo do Recados para colocar no botão.  
const recadoNovo = document.querySelector('#recado_orasystems').childNodes[1].innerHTML;

//Remover o header (Tiver que por aqui assim porque o .container-fluid também é usado para criar ficha.)
document.querySelectorAll('.container-fluid')[0].remove();

//Remove os BR do menu
document.querySelectorAll('.header br').forEach((item) => { item.remove(); });

document.querySelectorAll('table.header td').forEach((item) => {
  if (item.innerHTML.trim() === '&nbsp;&nbsp;&nbsp;') {
    item.parentNode.removeChild(item); //Remove Espaços
  }
});

document.querySelector('.header').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.padding = 0;
const menu = document.querySelector('.header').parentNode.parentNode.parentNode.parentNode.parentNode;
menu.style.position = 'fixed';
menu.style.width = '100%';
menu.style.top = 0;
menu.style.zIndex = 10;

var menuLinks = [];
document.querySelectorAll('table.header table td a').forEach((item) => {
  item.parentElement.parentElement.querySelectorAll('img[src="../img/blank.gif"]').forEach((img) => { img.style.display = 'none'});
  if (item.innerText.trim() === 'Início') { 
    item.childNodes[0].setAttribute("src", "https://img.icons8.com/?size=256&id=iSg6O34OUmNI&format=png"); 
    item.className = 'itemMenu'
  }
  if (item.innerText.trim() === 'F. Técnica') { 
    item.childNodes[0].setAttribute("src", "https://img.icons8.com/?size=256&id=7s1QdhUeQ5Tm&format=png"); 
    item.className = 'itemMenu'
  }
  if (item.innerText.trim() === 'Agenda') { 
    item.childNodes[0].setAttribute("src", "https://img.icons8.com/?size=256&id=wfSi4ctFgte4&format=png"); 
    item.className = 'itemMenu'
  }
  if (item.innerText.trim() === '') { 
    item.parentNode.remove(); //Remove o abrir chamados aqui
  }
  if (item.innerText.trim() !== 'Início' && item.innerText.trim() !== 'F. Técnica' && item.innerText.trim() !== 'Agenda' && item.innerText.trim() !== ''){
    //console.log(item.innerText + ' link: ' + item.href)
    menuLinks.push({"nome": item.innerText, "link": item.href})
    item.parentNode.remove(); //Remove
  }
});

var listaMenu = '<ul class="dropdown-menu">';
menuLinks.forEach(function(item) {
    listaMenu += `<li><a href="${item.link}">${item.nome}</a></li>`;
});
listaMenu += '</ul>';

//Cria o input de busca de chamado e top button
document.querySelector('table.header table tbody tr').innerHTML += `
<td>
  <div class="btn-group" role="group" id="groupMenu">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default inputMenu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu <span class="caret"></span>
      </button>    
        ${listaMenu}
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default inputMenu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Recados <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" style=" padding: 10px; color: #ccc; width: 500px">
        <li id="recadoNovo">${recadoNovo}</li>
      </ul>
    </div>
    <a type="button" class="btn btn-default inputMenu" href="new_ticket.php" style="padding: 6px 12px;font-size: 14px;">Abrir Chamado</a>
  </div>
</td>
<td width="175px">
  <form action="find_tickets.php" method="get" id="findby" style="margin: 0;">
    <div class="input-group">
      <input type="text" class="form-control inputMenu" placeholder="Nº Chamado" name="q" id="q">
      <select name="what" style="display: none;"><option value="seqid" selected="selected">Número do ticket</option></select>
      <span class="input-group-btn">
        <input type="submit" class="btn btn-default inputMenu" type="button" value="Go!"/>
      </span>
    </div>
  </form>
</td>
<td>
  <div class="btn-group" role="group" style="display: flex;">
      <a type="button" class="btn btn-default inputMenu" href="#top" style="padding: 2px;" onclick="$('html, body').animate({scrollTop: 0}, 'slow');"><img src="https://img.icons8.com/?size=256&id=NCPZ7hqe16dx&format=png" width="30px"/></a>
      <a type="button" class="btn btn-default inputMenu" href="#down" style="padding: 2px;" onclick="if ($('#tktTable').length > 0) {  $('html, body').animate({scrollTop: $('#tktTable table tr:last').offset().top}, 'slow'); } else { $('html, body').animate({scrollTop: $(document).height()}, 'slow'); }"><img src="https://img.icons8.com/?size=256&id=NCPZ7hqe16dx&format=png" width="30px" style="transform: rotate(180deg);"/></a>
  </div>
</td>
`;


