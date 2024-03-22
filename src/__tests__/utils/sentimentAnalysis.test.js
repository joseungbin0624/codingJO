import { analyzeSentiment } from '../../utils/sentimentAnalysis';

describe('sentimentAnalysis 함수', () => {
  test('텍스트 분석 결과가 올바르게 반환되는지 확인', () => {
    expect(analyzeSentiment('이 코스는 정말 행복하고 멋짐')).toBe('긍정적');
    expect(analyzeSentiment('이 경험은 정말 나쁨')).toBe('부정적');
    expect(analyzeSentiment('이 텍스트는 중립적인 경향이 있음')).toBe('중립');
  });
});
