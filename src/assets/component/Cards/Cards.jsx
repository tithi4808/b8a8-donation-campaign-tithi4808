import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch('/carddetails.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])


    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 lg:mx-auto">
            {
                cards.map((card,idx)=><Card key={idx} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;