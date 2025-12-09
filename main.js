document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    const N8N_WEBHOOK_URL = 'https://n8n-production-6608.up.railway.app/webhook/8b56e9be-84df-4500-bc07-a6449f23fd4e';

    // Gera um ID de sessão aleatório
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    function addMessage(message, sender) {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);

        const iconElement = document.createElement('div');
        iconElement.classList.add('chat-icon');
        if (sender === 'bot') {
            iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5m-9.25-11.396c-.251.023-.501.05-.75.082M19 14.5a2.25 2.25 0 01-2.25-2.25h-5.25a2.25 2.25 0 01-2.25-2.25m14.25-11.396c.251.023.501.05.75.082M19 14.5v-5.714c0-.597-.237-1.17-.659-1.591L14.25 3.104M19 14.5M3 14.5a2.25 2.25 0 01-2.25-2.25v-5.25a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v5.25a2.25 2.25 0 01-2.25-2.25m-14.25-11.396c-.251.023-.501.05-.75.082" /></svg>`;
        } else {
            iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`;
        }

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = message.replace(/\n/g, '<br>');
        
        messageElement.appendChild(iconElement);
        messageElement.appendChild(messageContent);
        
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.classList.add('chat-message', 'bot-message');
        typingIndicator.innerHTML = '<div class="chat-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5m-9.25-11.396c-.251.023-.501.05-.75.082M19 14.5a2.25 2.25 0 01-2.25-2.25h-5.25a2.25 2.25 0 01-2.25-2.25m14.25-11.396c.251.023.501.05.75.082M19 14.5v-5.714c0-.597-.237-1.17-.659-1.591L14.25 3.104M19 14.5M3 14.5a2.25 2.25 0 01-2.25-2.25v-5.25a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v5.25a2.25 2.25 0 01-2.25-2.25m-14.25-11.396c-.251.023-.501.05-.75.082" /></svg></div><div class="message-content">...</div>';
        chatWindow.appendChild(typingIndicator);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function sendMessageToWebhook(message) {
        showTypingIndicator();
        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message, id: sessionId })
            });

            if (!response.ok) {
                throw new Error(`Erro na rede: ${response.statusText}`);
            }

            const data = await response.json();
            const botReply = data.output || "Não entendi a resposta do servidor.";

            addMessage(botReply, 'bot');

        } catch (error) {
            console.error('Erro ao contatar o webhook:', error);
            addMessage('Desculpe, não consigo me conectar ao servidor agora. Tente novamente mais tarde.', 'bot');
        }
    }

    async function handleUserMessage(e) {
        e.preventDefault();
        const userInput = messageInput.value.trim();
        if (!userInput) return;

        addMessage(userInput, 'user');
        messageInput.value = '';
        sendButton.disabled = true;

        await sendMessageToWebhook(userInput);

        sendButton.disabled = false;
        messageInput.focus();
    }

    async function startConversation() {
        await sendMessageToWebhook('START_CONVERSATION');
    }

    chatForm.addEventListener('submit', handleUserMessage);

    startConversation();
});