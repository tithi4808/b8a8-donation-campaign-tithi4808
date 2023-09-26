import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from "recharts";
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
       
        

        <>
            <div >
                <div className="flex justify-center items-center">
                    
                    <div className="mt-10" >
                        <ResponsiveContainer width={400} height={400} className="text-center">
                            <PieChart width="100%" height={600}>
                                 <Legend  align="top" /> 
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={140}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
        
//     );
// };

export default Statistics;