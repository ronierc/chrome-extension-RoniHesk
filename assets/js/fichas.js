// Troca icones das fichas
const troca = {
  'img/icon_like.jpg': 'https://img.icons8.com/?size=20&id=ZAASfo9L21mn&format=png',
  'img/flag-s.png': 'https://img.icons8.com/?size=20&id=70yRC8npwT3d&format=png',
  'img/play-ft.png': 'https://img.icons8.com/?size=20&id=KQ5qZwOlaNdR&format=png',
  'img/info.png': 'https://img.icons8.com/?size=20&id=VQOfeAx5KWTK&format=png',
  '../img/print.png': 'https://img.icons8.com/?size=20&id=n9P6681cdRgv&format=png',
  '../img/editar-ficha.png': 'https://img.icons8.com/?size=20&id=poyizCBxzCRY&format=png',
};

document
  .querySelectorAll('img[src], input[type="image"][src]')
  .forEach(el => {
    const atual = el.getAttribute('src');
    const novo = troca[atual];
    if (novo) el.setAttribute('src', novo);
  });

// Alterar botão de criar ficha
const imgCadFicha = document.querySelector('img[src="../img/nova-ficha-tecnica.png"]').parentElement

imgCadFicha.innerHTML = `
<button type="button" class="btn" style="display: flex; align-items: center; padding: 20px 7px !important; ">
  <img src="https://img.icons8.com/?size=20&amp;id=CMoTVZV8TzBH&amp;format=gif" style="width:30px;border-radius: 50%;margin-right: 7px;">
  Cadastrar Ficha
</button>` ;

// Fazer paginação quebrar a linha
const paginacao = document.querySelector('.pgoff').parentElement;
paginacao.style.display = 'flex';
paginacao.style.flexWrap = 'wrap';