
# Blueprint do Projeto: Chatbot de Avaliação de Matemática

## Visão Geral

O objetivo deste projeto é desenvolver uma interface de chatbot moderna e interativa para realizar avaliações diagnósticas de matemática para alunos do ensino fundamental (cerca de 14 anos). A aplicação será uma página da web única, projetada para ser visualmente atraente, responsiva e fácil de usar.

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
    *   **Cabeçalho:** Contém o título do chatbot.
    *   **Janela de Chat:** Área rolável onde as mensagens aparecem.
    *   **Formulário de Entrada:** Fixo na parte inferior, com um campo de texto estilizado e um botão de envio com ícone.

## Funcionalidades e Lógica

*   **Estrutura do HTML (`index.html`):** Estrutura semântica para o corpo do chat, a janela de mensagens e o formulário de entrada.
*   **Estilização (`style.css`):**
    *   Uso de Flexbox para alinhamento e layout.
    *   Estilos distintos para mensagens do bot e do usuário (cores e alinhamento).
    *   Design responsivo com Media Queries.
    *   Animações sutis para a aparição de mensagens.
*   **Lógica do Chatbot (`main.js`):**
    *   **Fluxo de Conversa:** O chatbot inicia com uma mensagem de boas-vindas.
    *   **Banco de Perguntas:** Um array de objetos, onde cada objeto contém uma pergunta e a resposta correta.
    *   **Validação de Respostas:** O sistema verifica se a resposta do usuário corresponde à resposta esperada.
    *   **Feedback:** O bot responde com "Correto!" ou "Incorreto, tente novamente."
    *   **Progressão:** Após uma resposta correta, o bot faz a próxima pergunta.
    *   **Conclusão:** Ao final de todas as perguntas, o bot exibe uma mensagem de conclusão e a pontuação final.

## Plano de Implementação Atual

1.  **Estruturar o HTML:** Configurar `index.html` com as divs principais para o contêiner do chat, a janela de mensagens e o formulário de entrada.
2.  **Estilizar a Interface:** Implementar o design escuro, as bolhas de mensagem e o layout responsivo em `style.css`.
3.  **Desenvolver a Lógica do Chat:** Criar o fluxo de perguntas e respostas, a validação e o feedback em `main.js`.
