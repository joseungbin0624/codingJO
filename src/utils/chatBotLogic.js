// 챗봇의 대답을 생성하는 함수
export const getChatBotResponse = (input) => {
  if (input.toLowerCase().includes('hello')) {
    return '안녕하세요! 오늘 어떻게 도와드릴까요?';
  } else if (input.toLowerCase().includes('course')) {
    return '저희는 프로그래밍부터 디자인까지 다양한 과정을 제공합니다. 어떤 과정에 관심이 있으세요?';
  } else {
    return "죄송해요, 그 질문에는 답변하기 어렵네요. 다른 방식으로 질문해보시겠어요?";
  }
};
