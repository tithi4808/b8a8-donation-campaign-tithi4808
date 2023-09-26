import { NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
       <>
        <div className="mt-24">
            <h1 className="text-4xl font-bold mb-2">OOPS!!</h1>
            <p className="text-2xl mb-16">Sorry,This page doesn't exist</p>

            
            <button className="bg-gray-300 px-4 py-2 text-black font-bold rounded"><NavLink to='/'>Go Back</NavLink></button>
            
        </div>
       
       </>
    );
};

export default Errorpage;