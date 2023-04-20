import React from 'react'
import Chart from "react-apexcharts";
import './chart.css'

const chart = () => {
  const param={ series: [
    {
      color:"#9BDD7C",
      name: "Guest",
      data: [0, 200, 300, 400, 500,700]
    },
    {
      name: "User",
      data: [0, 300, 80, 390,220,65],
      color:"#E9A0A0"
    }
  ],}

  const data = {
    options: {
      chart: {
        type: "area",
        height: "20",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      

      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false
      },
      tooltip: {
        x: {
          format: "text",
        },
      },
      zoom: {
        enabled: false
      },
      grid: {
        show: true,
      },
      fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.0,
            opacityTo: 0.00,
            stops: [20, 100, 100, 100]
          },
      },
      
    
    dataLabels: {
      enabled: false
    },
      title: {
        text: 'Activities',
        align: 'left',
        offsetX: 14
      },
      subtitle:{
        text:"May-june 2021 ",
        align:'left',
        offsetX: 14
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10
      },
    
      xaxis: {
        
        categories: [
          " ",
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          " "
          
        ],
      },
    },
  };
  return (
    <div className='chart'>
       <Chart  options={data.options} series={param.series} type="area"  height="220px" />
    </div>
  )
}

export default chart