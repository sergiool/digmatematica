# Blueprint do Projeto: Avaliação de Matemática

## Visão Geral

O objetivo deste projeto é desenvolver uma interface de chat moderna e interativa para realizar avaliações diagnósticas de matemática para alunos do ensino fundamental (cerca de 14 anos). A aplicação será uma página da web única, projetada para ser visualmente atraente, responsiva e fácil de usar.

## Design e Estilo

*   **Tema:** Dark Mode (Modo Escuro) para uma estética moderna e focada.
*   **Tipografia:** Fonte sans-serif limpa e legível (Poppins).
*   **Paleta de Cores:**
    *   Fundo Principal: Um cinza muito escuro (`#1a1a1a`).
    *   Fundo do Chat: Um cinza um pouco mais claro (`#2c2c2c`).
    *   Bolhas de Mensagem (Bot): Roxo (`#8A2BE2`).
    *   Bolhas de Mensagem (Usuário): Azul (`#007BFF`).
    *   Texto: Branco ou cinza claro.
*   **Layout:** Design centrado, com a janela do chat ocupando a maior parte do espaço vertical. O layout é totalmente responsivo para se adaptar a telas de desktop e móveis.
*   **Componentes:**
    *   **Cabeçalho:** Contém o título "Avaliação de Matemática".
    *   **Janela de Chat:** Área rolável onde as mensagens aparecem.
    *   **Formulário de Entrada:** Fixo na parte inferior, com um campo de texto estilizado e um botão de envio com ícone.
    *   **Barra de Status:** Uma barra fixa abaixo do formulário com informações institucionais, que serve como uma área de sacrifício para contornar bugs de teclado em dispositivos móveis.

## Funcionalidades e Lógica

*   **Estrutura do HTML (`index.html`):** Estrutura semântica para o corpo do chat, a janela de mensagens, o formulário de entrada e a barra de status.
*   **Estilização (`style.css`):**
    *   Uso de Flexbox e Posicionamento Fixo para criar um layout robusto.
    *   Estilos distintos para mensagens do bot e do usuário.
    *   Design responsivo com Media Queries.
    *   Animações sutis para a aparição de mensagens.
*   **Lógica do Chat (`main.js`):**
    *   **Comunicação com Webhook:** A lógica do chat (perguntas, validação, etc.) é gerenciada por um serviço de webhook externo (n8n).
    *   **Fluxo de Conversa:** O app envia a mensagem do usuário para o webhook e exibe a resposta recebida.
    *   **Feedback Visual:** Mostra um indicador de "digitando" enquanto aguarda a resposta do servidor.
    *   **Início Automático:** A conversa é iniciada automaticamente ao carregar a página.

## Plano de Implementação Atual

*   **Objetivo:** Alterar o título da aplicação.
*   **Passos:**
    1.  **Atualizar `index.html`**: Mudar o conteúdo da tag `<title>` e `<h1>` para "Avaliação de Matemática". (Concluído)
    2.  **Atualizar `blueprint.md`**: Refletir a mudança do nome do projeto na documentação. (Concluído)
