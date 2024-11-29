import React from 'react'
import HighchartsReact  from 'highcharts-react-official';
import Highchart from 'highcharts'; 

export default function Grafik() {

    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
  return (
    <>
    <HighchartsReact highcharts={Highchart} options={options} />  {/* Render the HighchartsReact component */}
    </>
  )
}
