 // 간단한 예시로, 실제 감정 분석은 더 복잡한 알고리즘을 필요로 할 수 있습니다.
export const analyzeSentiment = (text) => {
    // 긍정적인 단어와 부정적인 단어의 간단한 리스트
    const positiveWords = ['happy', 'joy', 'great'];
    const negativeWords = ['sad', 'bad', 'terrible'];
  
    // 텍스트에서 긍정적 및 부정적 단어의 수를 계산
    const positiveCount = positiveWords.filter(word => text.includes(word)).length;
    const negativeCount = negativeWords.filter(word => text.includes(word)).length;
  
    // 긍정적 단어가 더 많으면 'Positive', 그렇지 않으면 'Negative' 반환
    return positiveCount > negativeCount ? 'Positive' : 'Negative';
  };
  
