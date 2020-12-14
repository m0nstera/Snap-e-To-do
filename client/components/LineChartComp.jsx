import React, { Component } from "react";
import Chart from 'react-apexcharts';

class LineChartComp extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //     options: {
  //       chart: {
  //         id: "basic-bar"
  //       },
  //       xaxis: {
  //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  //       }
  //     },
  //     series: [
  //       {
  //         name: "series-1",
  //         data: [30, 40, 45, 50, 49, 60, 70, 91]
  //       }
  //     ]
  //   };
  // }


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
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
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
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              type="line"
              height={350}
              options={this.state.options}
              series={this.state.series}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChartComp;
