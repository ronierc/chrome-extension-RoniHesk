document.addEventListener('DOMContentLoaded', async () => {

  const root = document.documentElement;

  const configUser = await window.initStorage();
  if (!configUser) return;

  // Estado inicial 
  root.style.setProperty('--corPadrao', configUser.corPadrao);

  const selectOwner = document.querySelector('#owner');
  const selectColor = document.querySelector('#colorDef');
  const selectDash = document.querySelector('#dash');
  const selectTema = document.querySelector('#tema');

  selectOwner.value = configUser.escolha;
  selectColor.value = configUser.corPadrao;
  selectDash.checked = configUser.dash;
  selectTema.value = configUser.tema;

  // Eventos
  selectTema.addEventListener('change', () => {
    configUser.tema = selectTema.value;
    window.salvaStorage(configUser);
  });

  selectOwner.addEventListener('change', () => {
    configUser.escolha = selectOwner.value;
    window.salvaStorage(configUser);
  });

  selectColor.addEventListener('input', () => {
    configUser.corPadrao = selectColor.value;
    root.style.setProperty('--corPadrao', selectColor.value);
    window.salvaStorage(configUser);
  });

  selectDash.addEventListener('change', () => {
    configUser.dash = selectDash.checked;
    window.salvaStorage(configUser);
  });


});
