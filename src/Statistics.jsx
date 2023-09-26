import React, { PureComponent } from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';


const Statistics = () => {
    const friends = useLoaderData();
    const {id} = useParams();
     
    const friend =friends.find(friend => friend.id === id)
    console.log(friend);
    const data=[
        {id:1,name:"alen",ict:41},
        {id:2,name:"blean",ict:56},
        {id:3,name:"gralen",ict:84},
        {id:4,name:"aflen",ict:10},
        {id:5,name:"axalen",ict:90},
        {id:6, name:"jeckson",ict:2}
    ]
    
    return (
        <div>
            <h1>welcome to the piechart</h1>
            <PieChart width={1200} height={600}>
            <Pie data={data} dataKey="ict" cx="50%" cy="50%" outerRadius={150} fill="#FF444A"  />
            <Tooltip/>
            </PieChart>

        </div>
    );
};

export default Statistics;