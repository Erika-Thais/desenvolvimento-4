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

// Lista de Notícias do Meio Digital (Atualizada com a nova notícia futurista)
const noticiasDigitais = [
    {
        titulo: "Tradução de Pensamentos em Texto",
        descricao: "A decodificação da linguagem cerebral por meio da IA representa um dos maiores marcos da neurotecnologia e da medicina regenerativa. Utilizando modelos de linguagem semelhantes aos que movem os chatbots atuais, cientistas conseguiram treinar algoritmos para traduzir a atividade cerebral de pacientes — capturada por exames de ressonância magnética funcional (fMRI) ou implantes neurais — em frases completas e com sentido claro. A tecnologia não lê pensamentos invasivos, mas sim decodifica os padrões de ativação que ocorrem quando a pessoa tenta mentalmente formular uma fala. Esse avanço devolve a autonomia e a capacidade de comunicação em tempo real para indivíduos que perderam a voz devido a AVCs severos, esclerose lateral amiotrófica (ELA) ou paralisia total.",
        link: "#",
        imagemLateral: "https://picsum.photos", // Imagem temporária de tecnologia/IA
        imagemFundo: "https://picsum.photos",  // Imagem temporária abstrata para o fundo
        altDescricao: "Ilustração conceitual de uma rede neural brilhante representando conexões cerebrais artificiais."
    },
    {
        titulo: "Novas Diretrizes WCAG impulsionam IA inclusiva",
        descricao: "Especialistas debatem como os novos critérios de acessibilidade vão moldar os assistentes virtuais de última geração.",
        link: "#",
        imagemLateral: "",
        imagemFundo: "",
        altDescricao: ""
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
