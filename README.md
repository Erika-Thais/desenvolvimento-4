# Plataforma TechAccess Future 🚀

Uma plataforma web futurista de divulgação e arrecadação de fundos voluntários voltada para a promoção da tecnologia e da acessibilidade digital. Este projeto foi desenvolvido aplicando boas práticas de desenvolvimento front-end, controle de versão rigoroso e diretrizes de acessibilidade WCAG 2.1.

## 🎨 Identidade Visual Futurista
* **Preto** (Fundo principal)
* **Verde Musgo** (Elementos de suporte e blocos)
* **Amarelo Mostarda** (Destaques e links importantes)
* **Azul Celeste** (Elementos dinâmicos e interativos)

## 🛠️ Padrões do Projeto

### 🌿 Arquitetura Git e Branches
O projeto utiliza um fluxo simplificado baseado em Git Flow para garantir a organização:
* `main`: Branch de produção. Contém apenas código testado, estável e acessível.
* `develop`: Branch de integração. Onde as novas funcionalidades são unidas antes de irem para a produção.
* `feat/nome-da-feature`: Branches temporárias para criar novos recursos (ex: `feat/formulario-doacao`).
* `fix/nome-do-ajuste`: Branches temporárias para correção de bugs ou ajustes de acessibilidade (ex: `fix/contraste-cores`).

### 📝 Padrão de Commits (Conventional Commits)
Todos os commits devem ser claros e seguir a estrutura: `tipo: descrição curta em minúsculas`.
* `feat:` Quando adicionar uma nova funcionalidade (ex: `feat: adiciona secao de noticias`).
* `style:` Alterações de estilo e design que não mudam a lógica (ex: `style: aplica paleta futurista`).
* `accessibility:` Ajustes focados estritamente em WCAG (ex: `accessibility: adiciona tags alt nas imagens`).
* `docs:` Modificações na documentação (ex: `docs: atualiza instrucoes do readme`).

## ♿ Diretrizes de Acessibilidade (WCAG 2.1 AA)
* Navegação 100% funcional via teclado.
* Contraste mínimo de 4.5:1 para textos normais.
* Compatibilidade com leitores de tela usando tags HTML5 semânticas e atributos ARIA quando necessário.
* Suporte a `prefers-reduced-motion` para usuários com sensibilidade a animações.
