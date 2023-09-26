import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {  getAllId  } from "../Utility/localstorage";


const Statistics = () => {

    const [state,setstate]=useState([])
    
    useEffect(()=>{
        fetch('/carddetails.json')
        .then(res=>res.json())
        .then(data=>setstate(data))
    },[])
    
    


    
    const statedata=state.map(id=>id.id)
    const storedata= getAllId()
    
     const datas=statedata.filter(id=>storedata.includes(id))
     

    const totaldonation=state.length-datas.length 

 
    const data = [
        { name: "Total Donations", value: totaldonation },
        { name: "Your donations", value: datas.length  }
      ];
      
      
      const COLORS = ["#FF444A", "#00C49F"];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
          
           <>

            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
          
           </>
          
        );
      };
      
       
    
    return (
       
        <div>
         <PieChart width={700} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div>tithi</div>
        </div>
    );
};

export default Statistics;