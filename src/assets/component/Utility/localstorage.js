const getAllId=()=>{
    const storeddata=localStorage.getItem('id')
    if(storeddata)
    {
        return JSON.parse(storeddata)
    }
    return [];
}


// const setAllId=id=>
// {
//     const storedata=getAllId()


//      const exist=storedata.find(ids=>ids==id)
    
        
       
//         if(!exist)
//         {
             
//             storedata.push(id)
//         localStorage.setItem('id',JSON.stringify(storedata))
//         alert('successfully addded')
        
//         }
//         else{
//             storedata.push(...storedata,id)
//         localStorage.setItem('id',JSON.stringify(storedata))
//         alert('already addded')
//         }
        
    
// }

export {getAllId}