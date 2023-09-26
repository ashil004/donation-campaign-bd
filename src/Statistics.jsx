import React, { PureComponent, useState,useEffect } from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';


const Statistics = () => {
    
    
    
    const data=[
        {id:1,name:"Total donate",ict:100},
        {id:2,name:"My Donate",ict:60},
        
    ]
    
    return (
        <div >
            <h1 className='text-3xl text-center'>welcome to the piechart</h1>
            <PieChart   width={300} height={500} className=' md:ml-[30%] lg:ml-[38%]'>
            <Pie className='mx-w-auto' data={data} dataKey="ict" cx="50%" cy="50%" outerRadius={150} fill="#FF444A" />
            
            <Tooltip/>
            </PieChart>

        </div>
    );
};

export default Statistics;