import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Donationdetails from "../donationdetails/Donationdetails";


const Donations = () => {
    const allDetails=useLoaderData()
    
    const [alldata,setdata]=useState([])
    const [nodata,setnodata]=useState(false)
     const [datalength,setdatalength]=useState(4)
    const [show,setshow]=useState(false)
    useEffect(()=>{
        const clickedData=JSON.parse(localStorage.getItem('id'))
       if(clickedData)
       {
        const datas=allDetails.filter(data=>clickedData.includes(data.id))
            
             setdata(datas)
       }
       else{
        setnodata('not found')
       }
    },[])

    const handledata=()=>{
       
            
                 
                setshow(!show)
                setdatalength(alldata.length)
            
        
        
    }
    

    
    return (

        
          <div>
              {nodata? <p>{nodata}</p> :



<div >

<div className="grid grid-cols-2">
{
      show? alldata.map(data=><Donationdetails key={data.id} data={data}></Donationdetails>) : alldata.slice(0,datalength).map(data=><Donationdetails key={data.id} data={data}></Donationdetails>)
}

</div>
<div >
 {
     alldata.length>datalength && <button onClick={handledata} className="btn-primary px-4 py-2 mt-4 rounded">Show more</button>
 }
</div>
</div>}
          </div>



        
        
        // <div className={datalength<=0 ?'hidden':''} >
            
        //    <div className="grid grid-cols-2">
        //    {/* {
        //         alldata.slice(0,datalength).map(data=><Donationdetails key={data.id} data={data}></Donationdetails>)
        //     } */}
        //    </div>
        //     <div className={datalength==alldata.length ?'hidden':''}>
        //     <button onClick={handledata} className="btn-primary px-4 py-2 mt-4 rounded hidden">Show more</button>
        //     </div>
    
    );
}

export default Donations;