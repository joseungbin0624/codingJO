import React, { useEffect } from 'react';
import * as d3 from 'd3';
import '../styles/InteractiveGraph.scss';

function InteractiveGraph({ data }) {
  useEffect(() => {
    // 그래프 컨테이너 초기화
    d3.select('.interactive-graph svg').remove();
    const svg = d3.select('.interactive-graph').append('svg').attr('width', 600).attr('height', 400);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', d => d.value * 10)
      .attr('x', (d, i) => i * 45)
      .attr('y', d => 400 - d.value * 10)
      .attr('fill', 'teal');
  }, [data]); // 데이터 변경 시 그래프 업데이트

  return <div className="interactive-graph"></div>;
}

export default InteractiveGraph;
