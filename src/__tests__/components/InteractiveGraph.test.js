// InteractiveGraph 컴포넌트의 경우도 마찬가지로 d3 라이브러리 사용으로 인해 복잡할 수 있습니다. 기본 렌더링 확인에 집중합니다.
import React from 'react';
import { render } from '@testing-library/react';
import InteractiveGraph from '../../components/InteractiveGraph';

describe('InteractiveGraph Component', () => {
  it('renders correctly with given data', () => {
    const data = [{ value: 1 }, { value: 2 }];
    const { container } = render(<InteractiveGraph data={data} />);
    // 여기서는 d3에 의해 생성된 SVG 요소의 존재 여부 등을 검사할 수 있습니다.
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
