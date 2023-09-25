import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const CardInf = () => {
    const eax = useLoaderData() ;
    const {id} = useParams();
    const idInt = parseInt(id);
    const ea =eax.find(ea => ea.id === idInt)
    console.log(ea);
     const buttonClick = () => {
        swal('Good Job!','Thank you. For your donate.');

     }
    return (
        <div>
            
            
            <img  className="mx-auto pt-16 flex justify-center items-center"src={ea.picture}></img>
            <div className="ml-[360px] mt-[-60px] ">
            <button onClick={buttonClick} className="btn btn-primary">Donate ${ea.price}</button> 
            </div>

            <div className="pt-10">
            <h3 className="text-3xl font-bold">{ea.title}</h3>
            <p className="">{ea.description}</p>
            </div>

        
        </div>
    );
};

export default CardInf;