import { useState, useEffect } from "react";
import Cardassimble from "./Cardassimble";




const Home = () => {
    const [card, setcard] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcard(data));
    })
    return (
        <div>
            <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/G5ptSMH/Rectangle-4281.png)' }} >
                <div className="hero-overlay bg-opacity-80 bg-white"></div>

                <div className="pt-32 " >

                    <h3 className="text-center font-bold text-5xl ">I Grow By Helping People In Need</h3>
                    <div className="flex justify-center  items-center pt-16">

                        <input type="text" placeholder="Search here..." className="input input-bordered input-error w-full max-w-xs" />
                        <button className="btn bg-[#FF444A] text-white hover:bg-rose-400 w-[110px] h-[55px]">Search</button> </div>
                </div>


            </div>
            <div className="pt-16 ">
                <h3 className="text-center p-6 text-3xl font-bold"> The Donation Group :{card.length} </h3>
                <div className="grid grid-cols-4 gap-6">
                {
                    card.map((card)=><Cardassimble key={card.id} card={card}></Cardassimble>)
                    
                }
                </div>

            </div>
        </div>
    );
};

export default Home;