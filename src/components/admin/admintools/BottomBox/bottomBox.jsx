import Chart from "react-apexcharts";
import React from 'react';
import './bottomBox.css';
import { Schedule } from "./data";
const bottomBox = () => {
  const param={  
      data: [55,31,14]
  ,}

  const data = {
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Basic Tree', 'Custom Hot Pant', 'Super Hoodie', ],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }

        }}]},
  };
  return (
    <div className='bottomBox'>
    <div className='pieChart'>
      <div className='header'>
        <p style={{'fontWeight':'bold'}}>Top Products</p>
        <p style={{'fontWeight':'lighter', 'fontSize':'12px'}}>May- June 2021</p></div>
        <Chart  options={data.options} series={param.data} type="pie" height="150px"  />
    </div>
    <div className='schedule'>
    <div className='header'>
        <p style={{'fontWeight':'bold'}}>Today's Schedule</p>
        <p style={{'fontWeight':'lighter', 'fontSize':'12px'}}>See All </p></div>
        <div className="scheduleList">
          {Schedule.map((item,index)=>{return (
            <div className=" scheduleData">
              <div className="before" style={{"backgroundColor":item.color}}></div>
              <div className="after">
                <h4 style={{'margin':'3px', 'fontWeight':"normal", }}>{item.title}</h4>
                <h6 style={{'margin':'3px' ,'fontWeight':"lighter"}}>{item.value}</h6>
                <h6 style={{'margin':'3px', 'fontWeight':"lighter"}}>{item.location}</h6>
              </div>

            </div>
              
            
          )})}
        </div>
    </div>

    </div>
  )
}

export default bottomBox