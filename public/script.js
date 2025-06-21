// Get references to the HTML elements
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

/**
 * Handles the form submission event.
 * @param {Event} e - The form submission event.
 */
form.addEventListener("submit", async function (e) {
  // Prevent the form from reloading the page
  e.preventDefault();

  // Get the user's message and clean up whitespace
  const userMessage = input.value.trim();
  if (!userMessage) return; // Do nothing if the input is empty

  // 1. Display the user's message immediately
  appendMessage("user", userMessage);
  input.value = ""; // Clear the input field

  // 2. Show a temporary "thinking..." message from the bot
  const thinkingMessage = appendMessage("bot", "Gemini is thinking...");

  try {
    // 3. Send the user's message to the backend API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // The body of the request must be a JSON string
      body: JSON.stringify({ message: userMessage }),
    });

    // Check if the request was successful
    if (!response.ok) {
      // If not, throw an error to be caught by the catch block
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response from the server
    const data = await response.json();
    const botReply = data.reply;

    // 4. Update the "thinking..." message with the actual response
    thinkingMessage.textContent = botReply;
  } catch (error) {
    // 5. If an error occurs, update the message to show the error
    console.error("Error fetching response:", error);
    thinkingMessage.textContent =
      "Sorry, something went wrong. Please try again.";
  }
});

/**
 * Creates and appends a new message to the chat box.
 * @param {string} sender - The sender of the message ('user' or 'bot').
 * @param {string} text - The content of the message.
 * @returns {HTMLElement} The created message element.
 */
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  // Scroll to the bottom of the chat box to see the new message
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // Return the message element to allow for later updates
}
