import React from 'react';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import './InteractiveGraph.scss';

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  // 더 많은 데이터 포인트
];

const InteractiveGraph = () => {
  return (
    <div className="interactive-graph">
      <XYPlot height={300} width={300}>
        <LineSeries data={data} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default InteractiveGraph;

