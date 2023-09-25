import { useState, useEffect } from "react";
import DonattionCard from "./DonattionCard";

const Donation = () => {
    const [donateCards, setdonateCards] = useState([]);
    const [dataLength, setdataLength] = useState(4);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setdonateCards(data));
    })

    return (
        <div>
            {/* <h3>the Card : {donateCards.length}</h3> */}
            <div className="mt-12 grid grid-cols-2 gap-6">
                {
                    donateCards.slice(0,dataLength).map((donateCard) => <DonattionCard key={donateCard.id} donateCard={donateCard}></DonattionCard>)
                }
            </div>
            <div className="flex justify-center p-6">
                <div className={dataLength === donateCards.length && 'hidden'}>

                    <button onClick={() => setdataLength(donateCards.length)} className="btn hover:bg-indigo-800 bg-[#7E90FE] text-[#FFF] ">See All </button>
                </div>

            </div>

        </div>
    );
};

export default Donation;