const FAVICON_PADRAO = 'https://suporte.suprasys.com.br/intranet/admin/img/favicon.ico';
const FAVICON_CHAMADO = 'https://img.icons8.com/?size=80&id=wsA6b0gWRtPP&format=png';
const FAVICON_SOLICITACAO = 'https://img.icons8.com/?size=80&id=UmF1v-dFKf1k&format=png';
const URL_TICKET = 'https://suporte.suprasys.com.br/intranet/admin/admin_ticket.php?track=';

const tituloChamado = document.querySelector('#empresaid');
if (tituloChamado?.parentElement) {
    // Aplica cor vermelha no título do chamado
    tituloChamado.parentElement.classList.add('red');
}

const clienteAquisicao = document.querySelectorAll('#view1 strong')[1];
if (clienteAquisicao) {
    // Aplica cor vermelha no cliente aquisição
    clienteAquisicao.classList.add('red');
}

// Valida tela - se está na página de chamados e se tem SL
const telaChamado = document.getElementById('view1') !== null;
const areaSolicitacao = document.getElementById('area_solicitacao');
let numSL = areaSolicitacao?.children[0]?.innerText.replace(/\D/g, '') || null;
console.log(`${telaChamado ? 'chamado' : 'outra'} -- ${numSL}`);

let icone = FAVICON_PADRAO;
let nomeEmpresa = '';
let assunto = '';
let solicitante = '';
let ticketTrack = '';

if (telaChamado) {
    let campo = null;
    document.querySelectorAll('.tabcontent td').forEach((item) => {
        /** Adicionar class ao container do chamado - protocolo */
        const texto = item.innerText.trim();
        if (texto.includes('Num. Protocolo:')) {
            campo = item.parentElement.children[1];
            campo.classList.add('protocolo');
        }
    });

    /**Pega Histórico do Ticket */
    const historicoTicketItem = document.querySelector('li.smaller');
    let historicoTicket = null;
    if (historicoTicketItem) {
        historicoTicket = historicoTicketItem;
        for (let i = 0; i < 5 && historicoTicket?.parentElement; i += 1) {
            historicoTicket = historicoTicket.parentElement;
        }
        historicoTicket?.remove();
    }

    const interacoesTicket = document.querySelector('#view4');
    const interacoesTicketConteudo = interacoesTicket?.innerHTML;
    if (interacoesTicket && interacoesTicketConteudo !== undefined) {
        interacoesTicket.innerHTML = '';

    // 1. Create the element
        const newDiv = document.createElement('div');

    // 2. Set the ID
        newDiv.id = 'interacoesTicket';

    // 3. (Optional) Add content or styles
        newDiv.innerHTML = interacoesTicketConteudo;
        if (historicoTicket) {
            newDiv.appendChild(historicoTicket);
        }

    // 4. Append to the DOM (e.g., to body or another container)
        interacoesTicket.appendChild(newDiv);
    }


    nomeEmpresa = document.querySelector('img[src="img/telefone_empresa.png"]')?.parentElement?.children[0]?.innerText.replace('(Implantação)', '') || '';
    assunto = document.querySelector('h3.red')?.innerText.trim() || '';
    solicitante = document.querySelectorAll('.protocolo td')[23]?.innerText.trim() || '';

    icone = FAVICON_CHAMADO;

    if (campo) {
        const ticket = campo.innerText.replace(' (Número do ticket: ', '_').replace(') ', '');
        const [track, numeroTicket] = ticket.split('_');
        ticketTrack = track;

        document.querySelector('title').innerText = `CH: ${numeroTicket} - ${nomeEmpresa}`;
        campo.innerHTML = `<a href="${URL_TICKET}${track}" target="_blank">CH ${numeroTicket}</a>`;
        if (Number(numSL) > 0) {
            campo.innerHTML += ` <a href="${URL_TICKET}${track}" target="_blank">SL ${numSL}</a>`;
        }
    }

    const setasMenu = document.getElementById('setasMenu');
    const protocolo = document.querySelectorAll('.protocolo')[1];
    if (setasMenu && protocolo) {
        setasMenu.innerHTML += ` 
        <div class="chMenu">
            ${protocolo.outerHTML}
            <div style="display: none;" id="chMenu"></div>
        </div>
        <div class="chMenu2">
            <span>Emp:</span><span> ${nomeEmpresa}</span>
            <span>Slc:</span><span> ${solicitante}</span>
            <span>Ass:</span><span> ${assunto}</span>
        </div>
    `;
    }

}

// Copia numero da solicitação para o header
if (Number(numSL) > 0) {
    const numero = areaSolicitacao?.children[0]?.innerText.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    numSL = numero;
    document.querySelector('title').innerText = `SL: ${numero} - ${nomeEmpresa}`;

    icone = FAVICON_SOLICITACAO;
}

const menuCopiar = document.getElementById('chMenu');
if (menuCopiar && ticketTrack) {
    menuCopiar.innerHTML = `<a href="${URL_TICKET}${ticketTrack}" target="_blank">${document.querySelector('title').innerText}</a>`;
}

// Cria o icone
let linkTag = document.createElement('link');
// Define os atributos da tag
linkTag.rel = 'icon';
linkTag.href = icone;
// Adiciona a tag <link> ao <head> do documento
document.head.appendChild(linkTag);

// Seleciona e adiciona o evento
document.querySelectorAll('.chMenu').forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        const chMenu = document.querySelector('#chMenu');
        if (chMenu) {
            copiarHTML(chMenu);
        }
    });
});
console.log(document.querySelector('#chMenu')?.innerHTML || 'Sem conteúdo para copiar.');

// Função de cópia
function copiarHTML(elemento) {
    const conteudoHTML = elemento.innerHTML;
    const blob = new Blob([conteudoHTML], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    console.log(elemento);
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