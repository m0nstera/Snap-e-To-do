import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Row from 'react-bootstrap/Row';

const PieChartComp = ({todoList}) => {
  const filterTrue = todoList.filter((todo, i) => todo.completed === true);
  const filterFalse = todoList.filter((todo, i) => todo.completed === false);
  const pieData = [
    { title: 'Complete', value: filterTrue.length, color: '#C6C6C6' },
    { title: 'Incomplete', value: filterFalse.length, color: '#303030' },
  ];

  const defaultLabelStyle = {
    fontSize: '10px',
    fontFamily: 'Kumbh Sans'
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
          data={pieData}
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
