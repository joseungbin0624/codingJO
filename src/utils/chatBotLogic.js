const chatBotResponse = (question) => {
    // 단순 예시 로직
    if (question.includes('help')) {
      return 'How can I assist you?';
    } else {
      return "I'm not sure how to answer that. Can you try asking differently?";
    }
  };
  
  export default chatBotResponse;
  
