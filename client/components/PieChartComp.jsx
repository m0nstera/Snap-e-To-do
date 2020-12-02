import React from 'react';
import Row from 'react-bootstrap/Row';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComp = ({todoList}) => {
  // const filterTrue = todoList.map((todo, i) => todo.completed === true);
  // const filterFalse = todoList.map((todo, i) => todo.completed === false);
  const mappedPie = todoList.map((todo, i) =>
  todo.completed === true
  ? {title: 'Complete', value: todo.completed === true, color: '#E38627'}
  : {title: 'Incomplete', value: todo.completed === false, color: '#6A2135'});

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
