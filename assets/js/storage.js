const confUserPadrao = {
  escolha: 'TODOS',
  dash: true,
  corPadrao: '#e139ac',
  tamanhoBarra: '5px'
};

window.initStorage = async () => {
  const { roniHesk } = await chrome.storage.local.get('roniHesk');

  if (!roniHesk) {
    await chrome.storage.local.set({ roniHesk: confUserPadrao });
    return confUserPadrao;
  }

  return roniHesk;
};

window.salvaStorage = async (valJson) => {
  await chrome.storage.local.set({ roniHesk: valJson });
};
