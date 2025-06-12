/**
  Classifique como INTERNO ou EXTERNO
  se mesmo classificando você não aparecer é devido não estar na pagina.
  A extensão não inclui ela apenas manipula os compontentes carregados.
*/
const analistasData = [
  { id: 612, nome: 'Manoel', setor: 'EXTERNO' },
  { id: 361, nome: 'Adriano Pavaneli', setor: 'EXTERNO' },
  { id: 994, nome: 'Gabriel Ribeiro', setor: 'INTERNO' },
  { id: 848, nome: 'Leandro', setor: 'EXTERNO' },
  { id: 401, nome: 'Pinheiro', setor: 'EXTERNO' },
  { id: 705, nome: 'Julio Polizelli', setor: 'INTERNO' },
  { id: 18, nome: 'Pavesi', setor: 'INTERNO' },
  { id: 209, nome: 'Fachini', setor: 'INTERNO' },
  { id: 471, nome: 'Wagner', setor: 'INTERNO' },
  { id: 907, nome: 'Luis Magri', setor: 'INTERNO' },
  { id: 16, nome: 'Péricles', setor: 'INTERNO' },
  { id: 732, nome: 'Ronier', setor: 'EXTERNO' },
  { id: 6, nome: 'Denis', setor: 'EXTERNO' },
  { id: 890, nome: 'Pires', setor: 'INTERNO' },
  { id: 23, nome: 'Larissa', setor: 'INTERNO' },
  { id: 883, nome: 'Laerte Fernandes', setor: 'INTERNO' },
  { id: 11, nome: 'Vitor', setor: 'EXTERNO' },
  { id: 20, nome: 'Luis Henrique', setor: 'INTERNO' },
  { id: 818, nome: 'TI', setor: 'INTERNO' },
  { id: 1031, nome: 'Leonardo', setor: 'INTERNO' },
  { id: 1033, nome: 'Batista', setor: 'INTERNO' },
  { id: 828, nome: 'Geovanne', setor: 'INTERNO' },
  { id: 1036, nome: 'Vicente', setor: 'INTERNO' },
  { id: 1037, nome: 'Neves', setor: 'INTERNO' }
];

const linksExternos = [
  { nome: 'Chamados', link: 'https://suporte.suprasys.com.br/.chamados/' },
  { nome: 'Pedidos Online Homologação', link: 'http://hom.vendas.suprasys.com.br/' },
  { nome: 'Pedidos Online Produção', link: 'https://vendas.suprasys.com.br/' },
  { nome: 'IntraSys', link: 'https://suporte.suprasys.com.br/controle' },
  { nome: 'Monitor de Backups', link: 'https://monitor-backup.suprasys.com.br' },
  { nome: 'Trello', link: 'https://trello.com/' },
  { nome: 'SupraHelp', link: 'https://hom.suprahelp.suprasys.com.br/' },
  { nome: 'Econect', link: 'https://www.econeteditora.com.br/' },
  { nome: 'Status Serviços', link: 'https://status.suprasys.com.br/' },
  { nome: 'RoniHesk (Extensão)', link: 'https://github.com/ronierc/chrome-extension-RoniHesk' }
];