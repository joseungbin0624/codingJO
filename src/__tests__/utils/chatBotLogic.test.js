import { chatBotLogic } from '../../utils/chatBotLogic';

describe('chatBotLogic 함수', () => {
  test('"hello" 포함 시 적절한 응답 반환', () => {
    expect(chatBotLogic('hello')).toBe('Hi there! How can I help you today?');
  });

  test('"help" 포함 시 적절한 응답 반환', () => {
    expect(chatBotLogic('I need some help')).toBe('Sure, what do you need help with?');
  });

  test('해당되지 않는 입력에 대한 응답', () => {
    expect(chatBotLogic('random input')).toBe('Sorry, I didn\'t understand that. Can you try asking in a different way?');
  });
});
