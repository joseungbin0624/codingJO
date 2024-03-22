export const chatBotLogic = (input) => {
  if (input.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you today?";
  } else if (input.toLowerCase().includes("help")) {
      return "Sure, what do you need help with?";
  }
  return "Sorry, I didn't understand that. Can you try asking in a different way?";
};
