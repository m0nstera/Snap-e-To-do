import React from 'react';
import Row from 'react-bootstrap/Row';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComp = ({todoList}) => {
  const filterTrue = todoList.map((todo, i) => todo.completed === true);
  const filterFalse = todoList.map((todo, i) => todo.completed === false);
  const mappedPie = todoList.map((todo, i) => [
      {title: 'Complete', value: filterTrue.length === true, color: '#303030'},
      {title: 'Incomplete', value: filterFalse.length === false, color: '#C6C6C6'}
    ]
  );

  const defaultLabelStyle = {
    fontSize: '10px',
    fontFamily: 'sans-serif',
  };

  return (
    <div>
      <Row>
        <h4 className="pie-heading">
          Complete vs. incomplete tasks
        </h4>
      </Row>
      <Row className="pie-chart">
        <PieChart
          className="pie-chart"
          data={mappedPie}
          lineWidth={65}
          paddingAngle={5}
          label={(data) => data.dataEntry.title}
          labelPosition={65}
          labelStyle={{
            ...defaultLabelStyle,
          }}
          style={{ height: '130px' }}
        />
      </Row>
    </div>

  )
};

export default PieChartComp;
