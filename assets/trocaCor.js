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
        --bgPrimary: #efeeee;
        --bgSecondary: #dee2e6;
        --bgTertiary: #d1dceb ;
        --bgComent: #bcc8d9;
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
        --bgPrimary: #363b3f;
        --bgSecondary: #292e32;
        --bgTertiary: #56595e;
        --bgComent: #484c4f;
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
      if (corDeFundo === 'rgb(255, 255, 255)' || corDeFundo === '#FFFFFF') {
          elemento.style.background = 'var(--bgPrimary)';
          elemento.style.color = 'var(--fontColor) !important';
      }
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
          elemento.style.background = 'var(--bgTertiary)';
          elemento.style.color = 'var(--fontColor) !important';
      }
      if ( //Fundos verde
        corDeFundo === 'rgb(221, 255, 221)' || corDeFundo === '#DDFFDD' ||
        corDeFundo === 'rgb(153, 255, 153)' || corDeFundo === '#99FF99' ||
        corDeFundo === 'rgb(233, 255, 219)' || corDeFundo === '#e9ffdb' ||
        corDeFundo === 'rgb(200, 229, 188)' || corDeFundo === '#c8e5bc' ||
        corDeFundo === 'rgb(153, 255, 102)' || corDeFundo === '#99FF66' ||
        corDeFundo === 'rgb(223, 240, 216)' || corDeFundo === '#dff0d8') {
          elemento.style.background = 'var(--green)';
          elemento.style.color = 'var(--fontColor) !important';
      }
      if (
        corDeFundo === 'rgb(255, 255, 153)' || corDeFundo === '#FFFF99' ||
        corDeFundo === 'rgb(251, 249, 238)' || corDeFundo === '#fbf9ee') {
          elemento.style.background = 'var(--corPadrao)';
          elemento.style.color = 'var(--bgSecondary) !important';
          elemento.style.borderColor = 'var(--bgComent)';
      }
      if (
        corDaBorda === 'rgb(209, 220, 235)' || corDaBorda === '#d1dceb' ||
        corDaBorda === 'rgb(204, 204, 204)' || corDaBorda === '#CCCCCC' ||
        corDaBorda === 'rgb(221, 221, 221)' || corDaBorda === '#DDDDDD'
        ) {
          elemento.style.borderColor = 'var(--border)';
      }
      if ( //Bordas verde
        corDaBorda === 'rgb(0, 102, 0)' || corDaBorda === '#006600' ||
        corDaBorda === 'rgb(24, 118, 15)' || corDaBorda === '#18760f' ||
        corDaBorda === 'rgb(178, 219, 161)' || corDaBorda === '#b2dba1' ) {
          elemento.style.borderColor = '#50FA7B';
      }
      if (corDaFonte === 'rgb(74, 85, 113)' || corDaFonte === '#4a5571' ||
          corDaFonte === 'rgb(0, 0, 0)' || corDaFonte === '#000000') {
          elemento.style.color = 'var(--fontColor) !important';//'#cfcfcf';
      }
      if (corDaFonte === 'rgb(0, 0, 153)' || corDaFonte === '#000099') {
          elemento.style.color = 'var(--corPadrao)';//'#cfcfcf';
      }
      if (corDaFonte === 'rgb(238 238 238)' || corDaFonte === '#EEEEEE') {
          elemento.style.color = 'var(--corPadrao)';//'#cfcfcf';
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

    document.querySelector('.cke_wysiwyg_frame').contentWindow.document.querySelector('head').innerHTML += `
    <style>
      ${styleRoot};

      .cke_editable {
        background: var(--bgPrimary);
        color: var(--fontColor);
      }
      .cke_editable div { /*Div de campo de codigo*/
        background: var(--bgSecondary) !important;
        border-color: ${vCorPadrao} !important;
      }
      *::-webkit-scrollbar-track { background: var(--bgSecondary); }
      *::-webkit-scrollbar { width: 5px; background: var(--bgSecondary); }
      *::-webkit-scrollbar-thumb { background:  ${vCorPadrao}; }
      *::-webkit-scrollbar-corner { background: ${vCorPadrao}; }
      .marker{
        background: var(--yellow) ;
        padding: 0 2px;
        color: var(--redDark) !important;
      }
      code{
        color: var(--pink) !important;
        background: var(--bgTertiary) !important;
      }

      .cke_panel_listItem a{
        border-color: ${vCorPadrao};
      }
    </style>`;
    
    document.querySelectorAll('.cke_combo').forEach((item) => { 
      item.addEventListener('click', () => {
        document.querySelector('.cke_panel_frame').contentWindow.onload = 
        document.querySelector('.cke_panel_frame').contentWindow.document.querySelector('head').innerHTML += `
        <style>
          ${styleRoot};
    
          html, body, p {
            background: var(--bgPrimary);
            color: var(--fontColor);
          }
          *::-webkit-scrollbar-track { background-color: var(--bgPrimary); }
          *::-webkit-scrollbar { width: 5px; background: var(--bgPrimary); }
          *::-webkit-scrollbar-thumb { background:  ${vCorPadrao}; }
          *::-webkit-scrollbar-corner { background: ${vCorPadrao}; }
          .cke_panel_listItem.cke_selected a{
            background-color: #1a1a1a !important;
          }
          .cke_panel {
            border-color: var(--border) !important;
          }
          .cke_panel_grouptitle{
            background: var(--bgPrimary);
            color: rgba(255, 255, 255, 0.6);
            box-shadow:none;
          }
          .cke_panel_listItem a {
            border-color: var(--border) !important;
            &:hover{
              background: var(--bgPrimary);
            }
          }
          #cke_69, #cke_70, #cke_84{
            display:none; 
          }
          #cke_77 div {/*Div de campo de codigo*/
              background-color: var(--bgComent) !important;
              border-color: ${vCorPadrao} !important;
          }            
          code{
            color: var(--pink) !important;
            background: var(--bgTertiary) !important;
          }
          .marker{
            background: var(--yellow) ;
            padding: 0 2px;
            color: var(--redDark) !important;
          }
          .cke_editable div { /*Div de campo de codigo*/
            background: var(--bgSecondary) !important;
            border-color: ${vCorPadrao} !important;
          }
          .cke_panel_listItem.cke_selected a {
              background: var(--bgTertiary) !important;
          }
        </style>`;
      });
    });


  }, "2000");


}
