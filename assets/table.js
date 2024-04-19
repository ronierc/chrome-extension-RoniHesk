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