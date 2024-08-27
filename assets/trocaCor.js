
// Chama a função para substituir as cores quando a página estiver completamente carregada 
window.onload = substituirCores;

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
          elemento.style.color = 'var(--fontColor)';
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
          elemento.style.color = 'var(--fontColor)';
      }
      if (
        corDeFundo === 'rgb(255, 255, 204)' || corDeFundo === '#FFFFCC' ||
        corDeFundo === 'rgb(229, 229, 229)' || corDeFundo === '#E5E5E5' ||
        corDeFundo === 'rgb(238, 238, 238)' || corDeFundo === '#EEEEEE' ||
        corDeFundo === 'rgb(226, 226, 226)' || corDeFundo === '#E2E2E2' ||
        corDeFundo === 'rgb(243, 243, 243)' || corDeFundo === '#F3F3F3' ||
        corDeFundo === 'rgb(231, 231, 231)' || corDeFundo === '#e7e7e7') {
          elemento.style.background = 'var(--bgTertiary)';
          elemento.style.color = 'var(--fontColor)';
      }
      if ( //Fundos verde
        corDeFundo === 'rgb(221, 255, 221)' || corDeFundo === '#DDFFDD' ||
        corDeFundo === 'rgb(153, 255, 153)' || corDeFundo === '#99FF99' ||
        corDeFundo === 'rgb(233, 255, 219)' || corDeFundo === '#e9ffdb' ||
        corDeFundo === 'rgb(200, 229, 188)' || corDeFundo === '#c8e5bc' ||
        corDeFundo === 'rgb(153, 255, 102)' || corDeFundo === '#99FF66' ||
        corDeFundo === 'rgb(223, 240, 216)' || corDeFundo === '#dff0d8') {
          elemento.style.background = '#53A653';
          elemento.style.color = 'var(--fontColor)';
      }
      if (
        corDeFundo === 'rgb(255, 255, 153)' || corDeFundo === '#FFFF99' ||
        corDeFundo === 'rgb(251, 249, 238)' || corDeFundo === '#fbf9ee') {
          elemento.style.background = 'var(--purple)';
          elemento.style.color = 'var(--bgSecondary)';
          elemento.style.borderColor = '#ff66ff';
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
          elemento.style.color = 'var(--fontColor)';//'#cfcfcf';
      }
      if (corDaFonte === 'rgb(0, 0, 153)' || corDaFonte === '#000099') {
          elemento.style.color = '#68b9ff';//'#cfcfcf';
      }
  }
  console.log(elementos)
}


//TextArea dentro do chamado.
/*
document.querySelector('iframe').contentWindow.document.querySelector('body').innerHTML += `
<style>

body {
  background-color: #191f31;
  color: rgba(255, 255, 255, 0.6);
}

.marker{
  background: #BD93F9;
}
</style>`;
*/


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
      .cke_editable {
        background-color: #191f31;
        color: rgba(255, 255, 255, 0.6);
      }
      *::-webkit-scrollbar-track { background-color: #4a5571; }
      *::-webkit-scrollbar { width: 5px; background: #4a5571; }
      *::-webkit-scrollbar-thumb { background:  #BD93F9; }
      *::-webkit-scrollbar-corner { background: #BD93F9; }
      .marker{
        background: #BD93F9;
      }

      .cke_panel_listItem a{
        border-color: #BD93F9;
      }
    </style>`;
    
    document.querySelectorAll('.cke_combo').forEach((item) => { 
      item.addEventListener('click', () => {
        document.querySelector('.cke_panel_frame').contentWindow.onload = 
        document.querySelector('.cke_panel_frame').contentWindow.document.querySelector('head').innerHTML += `
        <style>
    
          html, body, p {
            background-color: #191f31;
            color: rgba(255, 255, 255, 0.6);
          }
          *::-webkit-scrollbar-track { background-color: #4a5571; }
          *::-webkit-scrollbar { width: 5px; background: #4a5571; }
          *::-webkit-scrollbar-thumb { background:  #BD93F9; }
          *::-webkit-scrollbar-corner { background: #BD93F9; }
          
          .cke_panel {
            border-color: var(--border) !important;
          }
          .cke_panel_grouptitle{
            background: #1f2639;
            color: rgba(255, 255, 255, 0.6);
            box-shadow:none;
          }
          .cke_panel_listItem a {
            border-color: var(--border) !important;
            &:hover{
              background: #4a5571;
            }
          }
          #cke_69, #cke_70, #cke_84{
            display:none; 
          }
        </style>`;
      });
    });


  }, "2000");



    

}

//#cke_63_frame > document > html body.cke_ltr


