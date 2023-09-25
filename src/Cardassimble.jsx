import React from 'react';
import { Link } from 'react-router-dom';

const Cardassimble = ({card}) => {
    const {id, picture , category,title } = card
     return (
        <div>
            
            <div className="card h-96 bg-base-100 shadow-xl">
            <Link to={`/card/${id}`}>
                    <figure><img src={picture} alt="donation Group" /></figure>
                    
                    <div className="card-body"> 
                    
                        <h2 className="card-title">
                            <button className='btn border-2 '>{category}</button>
                        </h2>
                        <p>{title}</p>
                        
                        
                    </div>
                    </Link>
                </div>
            
        </div>
    );
};

export default Cardassimble;