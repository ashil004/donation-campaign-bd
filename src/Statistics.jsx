import React, { PureComponent } from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';


const Statistics = () => {
    const friends = useLoaderData();
    
    console.log(friends);
    const data=[
        {id:1,name:"Total donate",ict:100},
        {id:2,name:"My Donate",ict:56},
        
    ]
    
    return (
        <div>
            <h1 className='text-3xl text-center'>welcome to the piechart</h1>
            <PieChart width={1200} height={600}>
            <Pie data={data} dataKey="ict" cx="50%" cy="50%" outerRadius={150} fill="#FF444A" />
            
            <Tooltip/>
            </PieChart>

        </div>
    );
};

export default Statistics;