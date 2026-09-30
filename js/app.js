/* ==========================================================================
   LÓGICA PRINCIPAL DA APLICAÇÃO (Importando Componentes Funcionais)
   ========================================================================== */

import { criarTemplateArrecadacao, criarTemplateNoticia } from './templates.js';

// Dados da Prestação de Contas
const dadosArrecadacao = {
    totalArrecadado: 15420.00,
    metasAtingidas: [
        "Aquisição de 5 licenças de leitores de tela profissionais.",
        "Treinamento de acessibilidade digital para 3 ONGs locais.",
        "Desenvolvimento do validador de código acessível beta."
    ]
};

// Lista de Notícias do Meio Digital (Atualizada com 3 notícias completas)
const noticiasDigitais = [
    {
        titulo: "Tradução de Pensamentos em Texto",
        descricao: "A decodificação da linguagem cerebral por meio da IA representa um dos maiores marcos da neurotecnologia e da medicina regenerativa. Utilizando modelos de linguagem semelhantes aos que movem os chatbots atuais, cientistas conseguiram treinar algoritmos para traduzir a atividade cerebral de pacientes — capturada por exames de ressonância magnética funcional (fMRI) ou implantes neurais — em frases completas e com sentido claro. A tecnologia não lê pensamentos invasivos, mas sim decodifica os padrões de ativação que ocorrem quando a pessoa tenta mentalmente formular uma fala. Esse avanço devolve a autonomia e a capacidade de comunicação em tempo real para indivíduos que perderam a voz devido a AVCs severos, esclerose lateral amiotrófica (ELA) ou paralisia total.",
        link: "#",
        imagemLateral: "../imagens/ia.png",
        imagemFundo: "../imagens/aco.png",
        altDescricao: "Ilustração conceitual de uma rede neural brilhante representando conexões cerebrais artificiais."
    },
    {
        titulo: "Óculos de Realidade Aumentada Legenda Conversas em Tempo Real",
        descricao: "Um novo dispositivo vestível focado em acessibilidade começou a ser testado para ajudar a comunidade surda e com deficiência auditiva. Os óculos utilizam um microfone multidirecional integrado e um sistema de inteligência artificial de transcrição rápida para projetar legendas holográficas flutuantes diretamente no campo de visão do usuário. O sistema consegue identificar diferentes interlocutores e aplicar cores distintas para cada voz, permitindo que o usuário acompanhe diálogos em ambientes barulhentos sem perder o foco visual nas expressões faciais das pessoas ao seu redor.",
        link: "#",
        imagemLateral: "../imagens/ocu.png", // Imagem de realidade virtual/aumentada
        imagemFundo: "../imagens/aco.png",
        altDescricao: "Pessoa utilizando óculos tecnológicos inteligentes em um cenário futurista brilhante."
    },
    {
        titulo: "Navegação por Olhar Chega aos Sistemas Operacionais Mobile",
        descricao: "Grandes empresas de tecnologia anunciaram a integração nativa de ferramentas de rastreamento ocular (Eye Tracking) em suas atualizações mais recentes de sistemas para smartphones. Utilizando apenas a câmera frontal do aparelho e algoritmos avançados de aprendizado de máquina, a tecnologia permite que pessoas com limitações motoras severas controlem totalmente a interface do celular. O usuário consegue abrir aplicativos, rolar páginas do feed e digitar mensagens complexas usando apenas o movimento dos olhos e piscadas controladas para acionar os cliques.",
        link: "#",
        imagemLateral: "../imagens/gra.png", // Imagem de tela/tecnologia
        imagemFundo: "../imagens/aco.png",
        altDescricao: "Visão aproximada de uma tela digital exibindo gráficos de dados abstratos com iluminação azul."
    },
    {
        titulo: "Comunicação e Conservação Animal",
        descricao: "O uso de IA na bioacústica está transformando a nossa relação com o reino animal ao permitir a tradução de comunicações complexas que o ouvido humano não consegue processar. Projetos globais utilizam hidrofones e microfones de alta sensibilidade para captar milhares de horas de vocalizações de baleias-cachalote e elefantes, usando redes neurais profundas para identificar padrões, dialetos e estruturas gramaticais nessas gravações. Ao mapear o significado desses sons, os cientistas conseguem identificar quando os animais estão alertando sobre perigos, expressando estresse ou se comunicando em família. Esse entendimento direto ajuda a criar santuários ecológicos mais eficazes, prever rotas de migração e mitigar os impactos da atividade humana e da caça ilegal.",
        link: "#",
        imagemLateral: "../imagens/bal.png", // Imagem de baleia no oceano
        imagemFundo: "../imagens/aco.png",
        altDescricao: "Uma grande baleia-cachalote nadando em águas azuis profundas do oceano."
    },
    {
        titulo: "Arqueologia Digital e Pergaminhos de Herculano",
        descricao: "A inteligência artificial aplicada à arqueologia solucionou um mistério de quase dois mil anos ao ler os 'pergaminhos de Herculano', que foram completamente carbonizados pela erupção do Monte Vesúvio em 79 d.C. Como os rolos de papiro viraram blocos frágeis de carvão que se desintegrariam se fossem abertos fisicamente, os pesquisadores utilizaram tomografia computadorizada de alta resolução para escaneá-los em 3D. Em seguida, modelos de IA foram treinados para detectar variações milimétricas de textura e densidade na superfície do papiro digitalizado, conseguindo diferenciar a tinta à base de carbono do próprio papel queimado. O resultado foi a extração de textos filosóficos inéditos inteiros sem tocar nos artefatos originais, abrindo um novo capítulo para a preservação da história antiga.",
        link: "#",
        imagemLateral: "../imagens/man.png", // Imagem de manuscrito antigo/história
        imagemFundo: "../imagens/aco.png",
        altDescricao: " Close-up de fragmentos de manuscritos antigos com texturas envelhecidas."
    }
];


/* ==========================================================================
   FUNÇÃO PARA RENDERIZAR O CONTEÚDO USANDO TEMPLATES
   ========================================================================== */
function carregarConteudoDinamico() {
    
    const containerFinanceiro = document.getElementById("dados-financeiros");
    if (containerFinanceiro) {
        containerFinanceiro.innerHTML = criarTemplateArrecadacao(
            dadosArrecadacao.totalArrecadado, 
            dadosArrecadacao.metasAtingidas
        );
    }

    const containerNoticias = document.getElementById("feed-noticias");
    if (containerNoticias) {
        containerNoticias.innerHTML = noticiasDigitais
            .map(noticia => criarTemplateNoticia(noticia))
            .join('');
    }
}

document.addEventListener("DOMContentLoaded", carregarConteudoDinamico);
/* ==========================================================================
   4. INTERATIVIDADE DO MODAL (Apoio Voluntário no Topo)
   ========================================================================== */
function configurarModal() {
    const btnAbrir = document.getElementById("btn-abrir-apoio");
    const btnFechar = document.getElementById("btn-fechar-apoio");
    const modal = document.getElementById("modal-arrecadacao");

    if (btnAbrir && btnFechar && modal) {
        // Abre o Modal ao clicar no botão do topo
        btnAbrir.addEventListener("click", () => {
            modal.style.display = "flex";
            modal.setAttribute("aria-hidden", "false");
            // Acessibilidade: Move o foco do teclado direto para o campo de Nome
            document.getElementById("nome").focus();
        });

        // Fecha o Modal ao clicar no "X"
        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
            // Acessibilidade: Devolve o foco para o botão que abriu
            btnAbrir.focus();
        });

        // Fecha o Modal se o usuário clicar na área preta de fora da caixa
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                modal.setAttribute("aria-hidden", "true");
                btnAbrir.focus();
            }
        });
    }
}

// Inicializa a configuração do modal junto com o carregamento da página
document.addEventListener("DOMContentLoaded", configurarModal);
