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

  //Importa imagem 
  document.querySelectorAll('img[title="Chamado Ativo/Online"]').forEach((item) => {
    item.parentElement.innerHTML = `<svg fill="var(--corPadrao)" version="1.1" id="icoInfo" width="15" viewBox="0 0 341.33334 341.33334" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:zoom="0.83589134" inkscape:cx="320.61583" inkscape:cy="108.26766" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="g1"></sodipodi:namedview><g inkscape:groupmode="layer" inkscape:label="Image" id="g1"><path d="m 149.58898,332.86312 c -35.2244,-5.53705 -67.117508,-21.72419 -91.999998,-46.694 -37.31032,-37.44127 -54.5774499,-89.4587 -46.70481,-140.69878 2.78384,-18.11898 6.59928,-30.71687 14.02972,-46.323667 8.78639,-18.454826 18.33222,-31.990116 32.6801,-46.337987 49.584518,-49.5845201 124.118638,-62.6111201 186.985328,-32.6801 18.45483,8.78639 31.99012,18.33222 46.33799,32.6801 64.69828,64.698264 64.71484,168.876784 0.0371,233.328334 -14.41546,14.36505 -27.95701,23.90619 -46.3751,32.6751 -29.24043,13.92145 -63.53913,18.99492 -94.99034,14.051 z m 26.0962,-50.21828 c 11.35885,-6.0542 43.90381,-33.49007 43.90381,-37.01153 0,-3.82446 -5.31963,-2.63091 -22.70851,5.09502 -10.22174,4.54155 -19.27075,7.83352 -20.10892,7.3155 -3.62319,-2.23925 1.48209,-24.78024 20.61335,-91.01286 5.5772,-19.30832 10.52997,-38.04305 11.00616,-41.63273 0.82081,-6.18758 0.62156,-6.77092 -3.83481,-11.22729 -4.2192,-4.2192 -5.43879,-4.70061 -11.90838,-4.70061 -15.79077,0 -35.13991,10.36404 -55.06902,29.49678 -10.4739,10.05536 -13.20884,14.51379 -10.08684,16.4433 1.43417,0.88636 10.57469,-2.57019 27.147,-10.26582 8.0471,-3.73681 12.14731,-5.01025 13.09157,-4.06598 0.94427,0.94426 -1.14424,9.88595 -6.66841,28.54996 -15.18299,51.29739 -22.80653,84.07434 -22.80653,98.05528 0,20.24621 15.72255,26.53068 37.42953,14.96098 z m 32.3008,-190.97589 c 5.89472,-2.462973 12.51497,-10.348808 14.32213,-17.060072 2.09033,-7.762889 0.54664,-14.139442 -4.69095,-19.377032 -3.93242,-3.93242 -5.24203,-4.42817 -11.69766,-4.42817 -12.92479,0 -22.26913,9.77575 -22.3036,23.333333 -0.0366,14.409482 11.67623,22.835768 24.37008,17.531941 z"/></g></svg>`
  })

  //Altera a coluna Chamado Ativo/Online para a quantidade de dias que o chamado está em aberto
  document.querySelectorAll('table.white td:nth-child(11)').forEach((item) => {
    item.style.width = '50px';
    item.style.fontSize = '90%';
    dias = diferencaDatas(item.parentNode.querySelector('table.white td:nth-of-type(3)').innerText)
    item.innerHTML = `
      <span title="Atualizado à: ${item.parentNode.querySelector('table.white td:nth-of-type(4)').innerText}" id="diasAberto">
        ${dias}
      </span>
    `;
    if(dias <= 10){
      item.style.background = 'var(--corPadrao) !important';
    } else {
      item.style.background = 'var(--red) !important';
    }
  })

  
document.querySelectorAll('form[name="form1"] p').forEach((item) => { /**Adicionar class ao conteiner do chamado - protocoloc */
  let texto = item.innerText.trim();  
  item.children[0].removeAttribute("style"); 
  item.classList.add('titleAgrup'); 
  
  if (texto.includes('Status: Novo')) {
      item.children[0].classList.add('open');
  }
  if (texto.includes('Status: Respondido')) {
      item.children[0].classList.add('replied');        
  }
  if (texto.includes('Status: Em Análise')) {
      item.children[0].classList.add('analysis');        
  }
  if (texto.includes('Status: Resolvido')) {
      item.children[0].classList.add('resolved');        
  }
});

  //Tabela de Chamados
  document.querySelectorAll('table.white td:first-child').forEach((item) => { item.style.display = 'none'; }); //Remove o check de seleção
  document.querySelectorAll('table.white th:first-child').forEach((item) => { item.style.display = 'none'; }); //Remove o check de seleção
  document.querySelectorAll('table.white th:nth-of-type(4)').forEach((item) => { item.remove(); });
  document.querySelectorAll('table.white td:nth-of-type(4)').forEach((item) => { item.remove(); });
  document.querySelectorAll('table.white td:nth-child(11)').forEach((item) => { item.remove() }); //Remove coluna tipo chamado
  document.querySelectorAll('table.white th:nth-child(11)').forEach((item) => { item.remove() }); //Remove coluna tipo chamado


}// END If abaixo valida se esta na home.
