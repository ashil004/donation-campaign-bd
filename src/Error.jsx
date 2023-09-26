import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center mt-64">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/GcVZTTn/1535143-220600-P161-UB-122.jpg" alt="Error" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    
    <div className="card-actions">
      <Link to ={`/`}><button className="btn btn-primary">Go to Home</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Error;