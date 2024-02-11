// 감정 분석 유틸리티
// 간단한 예시로, 텍스트 내용을 기반으로 긍정적인지 부정적인지 판단

export const analyzeSentiment = (text) => {
  // 여기서는 단순한 예시로, 특정 키워드를 포함하는지 여부로 감정을 분석합니다.
  const positiveWords = ['happy', 'joy', 'love'];
  const negativeWords = ['sad', 'hate', 'pain'];

  const textWords = text.toLowerCase().split(' ');
  const positiveScore = textWords.filter(word => positiveWords.includes(word)).length;
  const negativeScore = textWords.filter(word => negativeWords.includes(word)).length;

  if (positiveScore > negativeScore) return 'Positive';
  if (negativeScore > positiveScore) return 'Negative';
  return 'Neutral';
};
