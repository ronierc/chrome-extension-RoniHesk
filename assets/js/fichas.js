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