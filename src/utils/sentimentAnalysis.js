// sentimentAnalysis.js

// 간단한 감정 분석 유틸리티. 실제 사용 시에는 외부 감정 분석 라이브러리나 API를 사용하는 것이 좋습니다.

export const analyzeSentiment = (text) => {
  // 임시 로직: 텍스트에 특정 키워드가 포함되어 있는지 기반으로 긍정/부정을 판단합니다.
  const positiveKeywords = ['행복', '좋음', '멋짐'];
  const negativeKeywords = ['슬픔', '나쁨', '불편'];

  const textLowerCase = text.toLowerCase();

  const hasPositive = positiveKeywords.some(keyword => textLowerCase.includes(keyword));
  const hasNegative = negativeKeywords.some(keyword => textLowerCase.includes(keyword));

  if (hasPositive && !hasNegative) return '긍정적';
  if (!hasPositive && hasNegative) return '부정적';
  return '중립';
};
