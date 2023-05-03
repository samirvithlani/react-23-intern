import React from 'react'
import { Pie } from 'react-chartjs-2'

export const PieChart = (props) => {
  return (
    <div>
        <div>
            <Pie data={props.data} 
            options={{
                title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:270
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
            />
        </div>
    </div>
  )
}
