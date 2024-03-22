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
