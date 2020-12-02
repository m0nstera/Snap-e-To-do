import React from 'react';
import Chart from 'react-apexcharts';

// const LineChartComp = () => {};


class LineChartComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Visualize Productivity',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#AAAAAA', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },


    };
  }

  render() {
    return (
      <div id="chart">
        <LineChartComp options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}

// export default LineChartComp;
