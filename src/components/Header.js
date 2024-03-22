// E:\project\codingJO\src\components\Header.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import '../styles/InteractiveGraph.scss';

function Header() {
  useEffect(() => {
    const data = [{value: 10}, {value: 20}, {value: 30}, {value: 40}, {value: 50}];
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
  }, []);

  return <div className="interactive-graph"></div>;
}

export default Header;
