import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  getAllId,  } from "../Utility/localstorage";



const CardDetails = () => {
    const details=useLoaderData()
    
    const {id}=useParams()
    const intid=parseInt(id)
    
    
    
    
    const detail=details.find(ids=>ids.id===intid)
    
   const notify=()=>{
    const setAllId=id=>
{
    const storedata=getAllId()
     const exist=storedata.find(ids=>ids==id)
    
        
       
        if(!exist)
        {
             
            storedata.push(id)
        localStorage.setItem('id',JSON.stringify(storedata))
        toast('you have successfully donated')
        
        }
        else{
            storedata.push(...storedata,id)
        localStorage.setItem('id',JSON.stringify(storedata))
        toast('Already Donated')
        }
        
    
}
setAllId(intid)
   }
    return (
        <div className="mt-14  ">
            <div className="relative">
            <img className="w-full h-96 mx-auto" src={detail.picture} alt="" />
            <div  >
                <div className="absolute mt-80  inset-0 bg-black opacity-50"></div>
            <button onClick={notify} className="absolute bottom-3  left-8 text-white px-3 py-2 rounded" style={{backgroundColor:`${detail.text_bg}`}}> Donate ${detail.price}</button>
            </div>
            </div>
            <h2 className="text-2xl font-bold my-4 text-start">{detail.title}</h2>
            <p className="text-sm text-start">{detail.description}</p>
            
            

            <ToastContainer />
        </div>
    );
};

export default CardDetails;