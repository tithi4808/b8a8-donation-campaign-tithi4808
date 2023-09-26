import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Card = ({card}) => {

    const {picture,title,category,card_bg,category_bg,text_bg,id
    }=card

    const navigate=useNavigate()

    const handledetails=()=>{
        navigate(`/carddetails/${id}`)
    }


    return (
        

            <div onClick={handledetails} className=" w-72 shadow-xl">
            
                <img  src={picture} alt={category} />
            
            <div className="card-body " style={{
                backgroundColor:`${card_bg}`
            }}>
                <div className="w-24">
                <h2 className="text-sm text-start font-semibold  px-4 py-1 rounded" style={{backgroundColor:`${category_bg}`,color:`${text_bg}`}}>{category}</h2>
                </div>
               
                <p className="text-start text-lg font-bold" style={{color:`${text_bg}`}}>{title}</p>
                
            </div>
            </div>
            
        
    );
};

Card.propTypes={
    card:PropTypes.object
}

export default Card;