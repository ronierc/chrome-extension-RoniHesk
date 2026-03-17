// Chama a função para substituir as cores quando a página estiver completamente carregada 
window.onload = substituirCores;
let styleRoot = '';

let vCorPadrao = '#bd93f9';
(async () => {
  const configUser = await window.initStorage();
  const root = document.documentElement;

  root.style.setProperty('--corPadrao', configUser.corPadrao);
  vCorPadrao = configUser.corPadrao;

  if(configUser.tema == 'light'){
    styleRoot = `
      :root {
        --corPadrao: ${vCorPadrao};
        --bgPrimary: #efeeee;
        --bgSecondary: #dee2e6;
        --bgTertiary: #d1dceb ;
        --bgComent: #bcc8d9;
        --border: #4a5571;
        --fontColor: #4a5571;
        --purple: #BD93F9;
        --red: #FF4455;
        --redDark: #c01068;
        --pink: #d63384;
        --yellow: #FFEB3B;
      } `;
  } else {
    styleRoot = `
      :root {
        --corPadrao: ${vCorPadrao};
        --bgPrimary: #363b3f;
        --bgSecondary: #292e32;
        --bgTertiary: #56595e;
        --bgComent: #484c4f;
        --border: #4a5571;
        --fontColor: #c9cacc;
        --purple: #BD93F9;
        --cyan: #8BE9FD;
        --red: #FF4455;
        --redDark: #c01068;
        --pink: #e685b5;
        --yellow: #FFEB3B;        
      } `;
  }
  
  })();


// Função para substituir todas as cores de fundo
function substituirCores() {
  // Obtém todos os elementos do documento
  var elementos = document.getElementsByTagName('*');
  
  
  // Itera sobre todos os elementos 
  for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      
      // Verifica se o elemento tem uma cor de fundo definida em #000000
      var corDeFundo = window.getComputedStyle(elemento, null).getPropertyValue('background-color');
      var corDaBorda = window.getComputedStyle(elemento, null).getPropertyValue('border-color');
      var corDaFonte = window.getComputedStyle(elemento, null).getPropertyValue('color');
      if (
        corDeFundo === 'rgb(245, 255, 250)' || corDeFundo === '#f5fffa' || 
        corDeFundo === 'rgb(196, 243, 255)' || corDeFundo === '#C4F3FF' || 
        corDeFundo === 'rgb(204, 251, 253)' || corDeFundo === '#CCFBFD' || 
        corDeFundo === 'rgb(251, 251, 251)' || corDeFundo === '#fbfbfb' || 
        corDeFundo === 'rgb(247, 247, 247)' || corDeFundo === '#F7F7F7' || 
        corDeFundo === 'rgb(245, 245, 245)' || corDeFundo === '#F5F5F5' ||
        corDeFundo === 'rgb(244, 244, 244)' || corDeFundo === '#F4F4F4') {
          elemento.style.background = 'var(--bgSecondary)';
          elemento.style.color = 'var(--fontColor) !important';
      }
      if (
        corDeFundo === 'rgb(255, 255, 204)' || corDeFundo === '#FFFFCC' ||
        corDeFundo === 'rgb(229, 229, 229)' || corDeFundo === '#E5E5E5' ||
        corDeFundo === 'rgb(238, 238, 238)' || corDeFundo === '#EEEEEE' ||
        corDeFundo === 'rgb(226, 226, 226)' || corDeFundo === '#E2E2E2' ||
        corDeFundo === 'rgb(243, 243, 243)' || corDeFundo === '#F3F3F3' ||
        corDeFundo === 'rgb(231, 231, 231)' || corDeFundo === '#e7e7e7') {
          elemento.style.background = 'var(--bgSecondary)';
          elemento.style.color = 'var(--fontColor) !important';
      }
      if (
        corDaBorda === 'rgb(209, 220, 235)' || corDaBorda === '#d1dceb' ||
        corDaBorda === 'rgb(204, 204, 204)' || corDaBorda === '#CCCCCC' ||
        corDaBorda === 'rgb(221, 221, 221)' || corDaBorda === '#DDDDDD' ||
        corDaBorda === 'rgb(243, 243, 243)' || corDaBorda === '#f3f3f3'
        ) {
          elemento.style.borderColor = 'var(--border) !important';
      }
  }
  // console.log(elementos)
}

document.querySelectorAll('img[src="../img/roundcornerslt.jpg"]').forEach((item) => { 
  item.style.display = 'none';
  item.parentElement.style.borderTop = '1px solid var(--border)'
  item.parentElement.style.borderLeft = '1px solid var(--border)'
});

document.querySelectorAll('img[src="../img/roundcornersrt.jpg"]').forEach((item) => { 
  item.style.display = 'none';
  item.parentElement.style.borderTop = '1px solid var(--border)'
  item.parentElement.style.borderRight = '1px solid var(--border)'
});

document.querySelectorAll('img[src="../img/roundcornerslb.jpg"]').forEach((item) => { 
  item.style.display = 'none';
  item.parentElement.style.borderBottom = '1px solid var(--border)'
  item.parentElement.style.borderLeft = '1px solid var(--border)'
});

document.querySelectorAll('img[src="../img/roundcornersrb.jpg"]').forEach((item) => { 
  item.style.display = 'none';
  item.parentElement.style.borderBottom = '1px solid var(--border)'
  item.parentElement.style.borderRight = '1px solid var(--border)'
});


//TextArea dentro do chamado.
if (document.querySelector('#HeskMsg') !== null){
  document.querySelectorAll('img').forEach((item) => { 
    item.style.maxWidth = '100%';
    item.style.height = 'auto';
  });

  setTimeout(() => {
    let styleWysiwyg = `
      <style>
        ${styleRoot}

        html, body, p, .cke_wysiwyg_frame, .cke_wysiwyg_div, .cke_editable {
          background: var(--bgSecondary) !important;
          color: var(--fontColor) !important;
        }
        *::-webkit-scrollbar-track { background-color: var(--bgPrimary); }
        *::-webkit-scrollbar { width: 5px; background: var(--bgPrimary); }
        *::-webkit-scrollbar-thumb { background:  var(--corPadrao); }
        *::-webkit-scrollbar-corner { background: var(--corPadrao); }
        .cke_panel_listItem.cke_selected a{
          background-color: var(--bgPrimary) !important;
        }
        .cke_panel {
          border-color: var(--border) !important;
        }
        .cke_panel_grouptitle{
          background: var(--bgPrimary) !important;
          color: var(--fontColor) !important;
          box-shadow: none !important;
        }
        .cke_panel_listItem a {
          border-color: var(--border) !important;
        }
        .cke_panel_listItem a:hover{
          background: var(--bgPrimary) !important;
        }
        #cke_69, #cke_70, #cke_84{ /*Remove tamanho de fonte pequena */
          display:none; 
        }
        .cke_panel_listItem.cke_selected a {
            background: var(--bgTertiary) !important;
        }
        .cke_panel_listItem a{
          border-color: var(--corPadrao);
        }
        div[aria-label="Tamanho"] ul li:nth-child(1) a,
        div[aria-label="Tamanho"] ul li:nth-child(2) a,
        div[aria-label="Tamanho"] ul li:nth-child(3) a,
        div[aria-label="Tamanho"] ul li:nth-child(4) a,
        div[aria-label="Fonte"] ul li:nth-child(6) a,
        div[aria-label="Fonte"] ul li:nth-child(7) a {
          display: none !important;
        }
        code{
          color: var(--pink) !important;
          background: var(--bgPrimary) !important;
        }
        .marker{
          background: var(--yellow) ;
          color: var(--redDark) !important;
        }
        #cke_77 div, .cke_editable div { /*Div de campo de codigo*/
          background: var(--bgPrimary) !important;
          border-color: var(--corPadrao) !important;
          color: var(--fontColor);
        }
        hr {
          display: block;
          margin: 10px 0;
          border-color: var(--corPadrao);
        }
      </style>
    `;

    document.querySelector('.cke_wysiwyg_frame').contentWindow.document.querySelector('head').innerHTML += styleWysiwyg;
    
    document.querySelectorAll('.cke_combo').forEach((item) => { 
      item.addEventListener('click', () => {
        const panelFrame = document.querySelector('.cke_panel_frame');
        panelFrame.onload = () => {
          panelFrame.contentDocument.head.insertAdjacentHTML('beforeend', styleWysiwyg);
        };
      });
    });


  }, "2000");


}
