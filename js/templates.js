/* ==========================================================================
   ARQUIVO DE TEMPLATES EM JAVASCRIPT (Geração de Componentes HTML Acessíveis)
   ========================================================================== */

export function criarTemplateArrecadacao(total, metas) {
    const listaMetasHTML = metas
        .map(meta => `<li style="margin-bottom: 8px;">${meta}</li>`)
        .join('');

    return `
        <p style="font-size: 1.5rem; color: #ADFF2F; margin-bottom: 15px;">
            <strong>Total Arrecadado:</strong> R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
        <h4 style="margin-bottom: 10px; color: #00BFFF;">Impacto Gerado com o Recurso:</h4>
        <ul style="padding-left: 20px;">
            ${listaMetasHTML}
        </ul>
    `;
}

/**
 * Cria a estrutura HTML de um cartão de notícia individual com suporte a imagens
 */
export function criarTemplateNoticia(noticia) {
    // Se a notícia tiver imagem de fundo, aplica via estilo inline de forma controlada
    const estiloFundo = noticia.imagemFundo 
        ? `background-image: linear-gradient(rgba(13, 13, 13, 0.85), rgba(13, 13, 13, 0.95)), url('${noticia.imagemFundo}'); background-size: cover; background-position: center;`
        : `background-color: #1A1A1A;`;

    // Se tiver imagem lateral, monta a estrutura HTML dela obedecendo as tags de acessibilidade (alt)
    const estruturaImagemLateral = noticia.imagemLateral
        ? `<div class="noticia-container-imagem">
                <img src="${noticia.imagemLateral}" alt="${noticia.altDescricao || 'Imagem da notícia'}" class="noticia-imagem-lateral">
           </div>`
        : '';

    return `
        <article class="cartao-noticia" style="${estiloFundo}">
            ${estruturaImagemLateral}
            <div class="noticia-conteudo-texto">
                <h3 class="noticia-titulo-custom">${noticia.titulo}</h3>
                <p class="noticia-corpo-custom">${noticia.descricao}</p>
                <a href="${noticia.link}" class="noticia-link-custom">
                    Leia mais <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </article>
    `;
}
