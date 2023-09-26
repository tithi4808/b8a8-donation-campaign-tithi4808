

const Donationdetails = ({data}) => {
    const {title,price,picture,category,category_bg,card_bg,text_bg,}=data
    return (
        <div className="mt-16">
            <div  className="w-auto md:w-auto md:h-auto lg:w-11/12 shadow-xl flex">
            
            <img className="w-40  md:w-auto " src={picture} alt={category} />
        
        <div className="card-body md:flex-1 " style={{
            backgroundColor:`${card_bg}`
        }}>
            <div className="w-24">
            <h2 className="text-sm text-start md:font-semibold  px-4 py-1 rounded" style={{backgroundColor:`${category_bg}`,color:`${text_bg}`}}>{category}</h2>
            </div>
           
            <p className="text-start md:font-bold">{title}</p>
            <p className="text-start" style={{color:`${text_bg}`}}>${price}</p>
            <button  className="text-white w-32 rounded-lg py-2" style={{backgroundColor:`${text_bg}`}}>View Details</button>
            
            
        </div>
        </div>
            
        </div>
    );
};

export default Donationdetails;