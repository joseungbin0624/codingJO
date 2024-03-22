import { calculateAverage, findMax, findMin } from '../../utils/dataAnalysis';

describe('dataAnalysis 함수', () => {
  const testData = [1, 2, 3, 4, 5];

  test('calculateAverage 함수가 올바른 평균을 반환하는지 확인', () => {
    expect(calculateAverage(testData)).toBe(3);
  });

  test('findMax 함수가 최대값을 반환하는지 확인', () => {
    expect(findMax(testData)).toBe(5);
  });

  test('findMin 함수가 최소값을 반환하는지 확인', () => {
    expect(findMin(testData)).toBe(1);
  });
});
