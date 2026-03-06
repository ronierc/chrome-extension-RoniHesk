//Aplica cor vermelha no titulo do chamado
document.querySelector('#empresaid').parentElement.classList.add('red');
//Aplica cor vermelha no cliente aquisição
document.querySelectorAll('#view1 strong')[1].classList.add('red');


//Valida tela- se esta na pagina de chamados e se tem SL ou se é outra pagina
let tela = document.getElementById('view1') != null ? "chamado" : "outra";
let numSL = document.getElementById('area_solicitacao') != null ? document.querySelector('#area_solicitacao').children[0].innerText.replace(/\D/g, '') : null;
console.log(tela + ' -- ' + numSL)


let icone = 'https://suporte.suprasys.com.br/intranet/admin/img/favicon.ico';


var nomeEmpresa = ''
if (tela == 'chamado') {
    nomeEmpresa = document.querySelector('img[src="img/telefone_empresa.png"]').parentElement.children[0].innerText.replace('(Implantação)', '');

    icone = 'https://img.icons8.com/?size=80&id=wsA6b0gWRtPP&format=png'; // Substitua pelo caminho do seu ícone

    var campo = '';
    document.querySelectorAll('.tabcontent td').forEach((item) => {
        let texto = item.innerText.trim();
        if (texto.includes('Num. Protocolo:')) {
            campo = item.parentElement.children[1];
            campo.classList.add('protocolo');
        }
    });
    var ticket = campo.innerText.replace(' (Número do ticket: ', '_').replace(') ', '');
    document.querySelector('title').innerText = 'CH: ' + ticket.split('_')[1] + ' - ' + nomeEmpresa
    campo.innerHTML = `<a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">CH ${ticket.split('_')[1]}</a></a>`;
    if (numSL > 0) {
        campo.innerHTML += ` <a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">SL ${numSL}</a>`;
    }
    document.getElementById('setasMenu').innerHTML += ` <div class="chMenu">${document.querySelectorAll('.protocolo')[1].outerHTML}<div style="display: none;" id="chMenu"></div></div>`;

}

// Copia numero da solicitação para o header
if (numSL > 0) {
    let numero = document.querySelector('#area_solicitacao').children[0].innerText.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    numSL = numero;
    document.querySelector('title').innerText = 'SL: ' + numero + ' - ' + nomeEmpresa

    icone = 'https://img.icons8.com/?size=80&id=UmF1v-dFKf1k&format=png'; // Substitua pelo caminho do seu ícone
}

if (document.getElementById('chMenu') !== null) {
    document.getElementById('chMenu').innerHTML = `<a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">${document.querySelector('title').innerText}</a></a>`;
}

// Cria o icone
let linkTag = document.createElement('link');
// Define os atributos da tag
linkTag.rel = 'icon';
linkTag.href = icone
// Adiciona a tag <link> ao <head> do documento
document.head.appendChild(linkTag);

// Seleciona e adiciona o evento
document.querySelectorAll('.chMenu').forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        copiarHTML(elemento.lastChild);
    });
});

// Função de cópia
function copiarHTML(elemento) {
    const conteudoHTML = elemento.innerHTML;
    const blob = new Blob([conteudoHTML], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    navigator.clipboard.write([clipboardItem])
        .then(() => {
            // Adiciona a classe de destaque
            elemento.parentElement.classList.add('copiado');

            // Remove a classe depois de 5 segundos
            setTimeout(() => {
                elemento.parentElement.classList.remove('copiado');
            }, 5000);
        })
        .catch(err => {
            console.error('Erro ao copiar o conteúdo HTML: ', err);
        });
}

