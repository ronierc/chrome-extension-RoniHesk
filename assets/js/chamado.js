//Aplica cor vermelha no titulo do chamado
document.querySelector('#empresaid').parentElement.classList.add('red');
//Aplica cor vermelha no cliente aquisição
document.querySelectorAll('#view1 strong')[1].classList.add('red');


//Valida tela- se esta na pagina de chamados e se tem SL ou se é outra pagina
let tela = document.getElementById('view1') != null ? "chamado" : "outra";
let numSL = document.getElementById('area_solicitacao') != null ? document.querySelector('#area_solicitacao').children[0].innerText.replace(/\D/g, '') : null;
console.log(tela + ' -- ' + numSL)


let icone = 'https://suporte.suprasys.com.br/intranet/admin/img/favicon.ico';


var nomeEmpresa = '';
var assunto = '';
var solicitante = '';
if (tela == 'chamado') {
    var campo = '';
    document.querySelectorAll('.tabcontent td').forEach((item) => { /**Adicionar class ao conteiner do chamado - protocoloc */
        let texto = item.innerText.trim();
        if (texto.includes('Num. Protocolo:')) {
            campo = item.parentElement.children[1];
            campo.classList.add('protocolo');
        }
    });

    /**Pega Histórico do Ticket */
    let historicoTicket = document.querySelector('li.smaller').parentElement.parentElement.parentElement.parentElement.parentElement;
    historicoTicket.remove();

    let interacoesTicket = document.querySelector('#view4');
    let interacoesTicketConteudo = interacoesTicket.innerHTML;
    interacoesTicket.innerHTML = '';

    // 1. Create the element
    let newDiv = document.createElement('div');

    // 2. Set the ID
    newDiv.id = 'interacoesTicket';

    // 3. (Optional) Add content or styles
    newDiv.innerHTML = interacoesTicketConteudo;
    newDiv.appendChild(historicoTicket);

    // 4. Append to the DOM (e.g., to body or another container)
    interacoesTicket.appendChild(newDiv);



    nomeEmpresa = document.querySelector('img[src="img/telefone_empresa.png"]').parentElement.children[0].innerText.replace('(Implantação)', '');
    assunto = document.querySelector('h3.red').innerText.trim(); 
    solicitante = document.querySelectorAll('.protocolo td')[23].innerText.trim();

    icone = 'https://img.icons8.com/?size=80&id=wsA6b0gWRtPP&format=png'; // Substitua pelo caminho do seu ícone

    var ticket = campo.innerText.replace(' (Número do ticket: ', '_').replace(') ', '');
    document.querySelector('title').innerText = 'CH: ' + ticket.split('_')[1] + ' - ' + nomeEmpresa
    campo.innerHTML = `<a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">CH ${ticket.split('_')[1]}</a></a>`;
    if (numSL > 0) {
        campo.innerHTML += ` <a href="https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=${ticket.split('_')[0]}" target="_blank">SL ${numSL}</a>`;
    }
    document.getElementById('setasMenu').innerHTML += ` 
        <div class="chMenu">
            ${document.querySelectorAll('.protocolo')[1].outerHTML}
            <div style="display: none;" id="chMenu"></div>
        </div>
        <div class="chMenu2">
            <span>Emp:</span><span> ${nomeEmpresa}</span>
            <span>Slc:</span><span> ${solicitante}</span>
            <span>Ass:</span><span> ${assunto}</span>
        </div>
    `;

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

