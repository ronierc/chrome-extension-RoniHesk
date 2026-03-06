// Troca icones das fichas
const troca = {
  'img/icon_like.jpg': 'https://img.icons8.com/?size=20&id=ZAASfo9L21mn&format=png',
  'img/flag-s.png': 'https://img.icons8.com/?size=20&id=70yRC8npwT3d&format=png',
  'img/play-ft.png': 'https://img.icons8.com/?size=20&id=KQ5qZwOlaNdR&format=png',
  'img/info.png': 'https://img.icons8.com/?size=20&id=VQOfeAx5KWTK&format=png',
  '../img/print.png': 'https://img.icons8.com/?size=20&id=n9P6681cdRgv&format=png',
  '../img/editar-ficha.png': 'https://img.icons8.com/?size=20&id=poyizCBxzCRY&format=png',
  '../img/tag_off.png': 'https://img.icons8.com/?size=20&id=XMbCezCL6pm3&format=png',
  '../img/change.png': 'https://img.icons8.com/?size=20&id=m8gRP2AQ4AOX&format=png',
  '../img/E.png': 'https://img.icons8.com/?size=20&id=dKMGP5XqWxob&format=png',
  '../img/D.png': 'https://img.icons8.com/?size=20&id=IchwUEgoxNcw&format=png',
  '../img/AT.png': 'https://img.icons8.com/?size=20&id=GOX0rYS9vb7n&format=png',
  '../img/I.png': 'https://img.icons8.com/?size=20&id=FFWqzOLsEvso&format=png',
  '../img/horario.png': 'https://img.icons8.com/?size=15&id=CcnMefzl28xf&format=png'
};

//Seleciona as img para trocar
document
  .querySelectorAll('img[src], input[type="image"][src]')
  .forEach(el => {
    const atual = el.getAttribute('src');
    const novo = troca[atual];
    if (novo) el.setAttribute('src', novo);
  });
