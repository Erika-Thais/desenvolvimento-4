# Plataforma TechAccess Future 🚀

Uma plataforma web futurista de divulgação e arrecadação de fundos voluntários voltada para a promoção da tecnologia e da acessibilidade digital. Este projeto foi desenvolvido aplicando as melhores práticas de desenvolvimento front-end, arquitetura modular e diretrizes de acessibilidade WCAG 2.1.

## 🎨 Identidade Visual Futurista
* **Preto Profundo (`#0D0D0D`)** - Fundo principal da interface.
* **Preto Claro (`#1A1A1A`)** - Cartões de conteúdo e seções.
* **Verde Musgo/Lima (`#ADFF2F`)** - Conceitos e títulos tecnológicos.
* **Amarelo Mostarda (`#E4D00A`)** - Destaques de ação e botões principais.
* **Azul Celeste (`#00BFFF`)** - Elementos interativos e bordas dinâmicas.

## ⚙️ Como Executar o Projeto Localmente

Para rodar e testar esta aplicação no seu computador de forma correta (garantindo o funcionamento dos módulos JavaScript), siga as instruções abaixo:

1. Instale a extensão **Live Server** no seu VS Code (desenvolvida por *Ritwick Dey*).
2. Abra a pasta raiz do projeto (`desenvolvimento-4`) no seu editor.
3. Clique com o botão direito em cima do arquivo `index.html` e selecione **Open with Live Server** (ou clique no botão **Go Live** na barra inferior direita do VS Code).
4. O navegador abrirá automaticamente o endereço local do servidor (geralmente `http://127.0.0`).

## 🛠️ Padrões do Projeto e Arquitetura

### 📂 Estrutura de Diretórios
* `/css/style.css` - Variáveis de ambiente, resets globais e animações baseadas em acessibilidade.
* `/js/app.js` - Arquivo de lógica principal, escuta de eventos e interatividade reativa do formulário.
* `/js/templates.js` - Módulo isolado contendo funções puras para geração de templates HTML dinâmicos.
* `/imagens/` - Diretório reservado para o armazenamento de ativos visuais locais da interface.

### 📝 Padrão de Commits (Conventional Commits)
O histórico deste repositório foi construído utilizando mensagens semânticas claras:
* `feat:` Inclusão de novas funcionalidades ou componentes.
* `style:` Ajustes estéticos, layout, fontes e cores sem alteração lógica.
* `fix:` Correção de bugs, caminhos de arquivos ou comportamento inesperado.
* `docs:` Atualizações estritas na documentação e guias de leitura.

## ♿ Diretrizes de Acessibilidade Cumpridas (WCAG 2.1 AA)
- **Navegação via Teclado:** Elementos operáveis contêm indicadores visuais de foco explícitos (`:focus`) e links ocultos de salto para o conteúdo principal.
- **Isolamento de Animações:** Uso da diretiva CSS `@media (prefers-reduced-motion: reduce)` para interromper transições e efeitos de pulsação caso o usuário prefira menor movimentação em tela.
- **Semântica Estrutural:** Aplicação rigorosa das tags HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) e mapeamento explícito de campos de texto aos seus respectivos rótulos (`<label for="...">`).
