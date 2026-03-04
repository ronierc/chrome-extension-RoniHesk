const confUserPadrao = {
  escolha: 'TODOS',
  dash: true,
  corPadrao: '#e139ac',
  tamanhoBarra: '5px',
  tema: 'dark'
};

window.initStorage = async () => {
  const { roniHesk } = await chrome.storage.local.get('roniHesk');

  if (!roniHesk) {
    await chrome.storage.local.set({ roniHesk: confUserPadrao });
    return confUserPadrao;
  }
    
  if(roniHesk.tema == 'light'){
    document.querySelector('html').setAttribute('data-bs-theme','light');
    console.log('light');
  } else {
    document.querySelector('html').setAttribute('data-bs-theme','dark');
    console.log('dark');
  }

  return roniHesk;
};

window.salvaStorage = async (valJson) => {
  await chrome.storage.local.set({ roniHesk: valJson });
};
