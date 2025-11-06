// ================================
// Load System Prompt
// ================================
let systemPrompt = "";

async function loadSystemPrompt() {
  const response = await fetch("./systemPrompt.txt");
  systemPrompt = await response.text();
  console.log("✅ System prompt loaded:", systemPrompt.slice(0, 200), "...");
}
window.addEventListener("DOMContentLoaded", loadSystemPrompt);

// ================================
// DOM Elements
// ================================
const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

const initialInputHeight = messageInput.scrollHeight;

// ================================
// API Setup
// ================================
// API URL trỏ đến backend proxy của bạn
const API_URL = '/api/gemini';


// ================================
// Create message bubble
// ================================
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// ================================
// Generate bot response
// ================================
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");

  // Safety: ensure system prompt loaded
  if (!systemPrompt) {
    messageElement.innerText = "System data is still loading. Please wait...";
    incomingMessageDiv.classList.remove("thinking");
    return;
  }

  const promptText = `
You must only answer using the information in the following text:
${systemPrompt}

If the user's question is unrelated or not mentioned, reply only with:
"I don't know."

User question:
${userData.message}
`;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: promptText }],
        },
      ],
    }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    console.log("API Response:", data);

    if (!response.ok) throw new Error(data.error.message);
    const apiResponseText =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "I don't know.";
    apiResponseText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // bold markdown
    apiResponseText.replace(/\*(.*?)\*/g, "<em>$1</em>"); // italics markdown
    messageElement.innerText = apiResponseText;
  } catch (error) {
    console.error(error);
    messageElement.innerText = "Error: " + error.message;
    messageElement.style.color = "#ff0000";
  } finally {
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// ================================
// Handle user message
// ================================
const userData = { message: "" };

const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  if (!userData.message) return;
  messageInput.value = "";
  messageInput.dispatchEvent(new Event("input"));

  // Display user message
  const messageContent = `<div class="message-text"></div>`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  outgoingMessageDiv.querySelector(".message-text").textContent =
    userData.message;
  chatBody.appendChild(outgoingMessageDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  // Add bot thinking placeholder
  setTimeout(() => {
    const messageContent = `
      <svg class="bot-avatar"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 1024 1024"
      >
        <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 
        47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 
        41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 
        106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9z"></path>
      </svg>
      <div class="message-text">
        <div class="thinking-indicator">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
      </div>`;
    const incomingMessageDiv = createMessageElement(
      messageContent,
      "bot-message",
      "thinking"
    );
    chatBody.appendChild(incomingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// ================================
// Event Listeners
// ================================
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (
    e.key === "Enter" &&
    userMessage &&
    !e.shiftKey &&
    window.innerWidth > 768
  ) {
    handleOutgoingMessage(e);
  }
});

messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius =
    messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
closeChatbot.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);