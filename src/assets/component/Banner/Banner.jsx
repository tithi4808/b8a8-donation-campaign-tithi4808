

const Banner = () => {



    const handleinput=e=>{
       e.target.value
       console.log(e.target.value)
    }
    


    return (
        <div>
           <div className="relative">
            <img src="https://i.ibb.co/FY00f2s/Health.png" alt="Your Image" className="w-full h-[250px]" />
            <div className="absolute inset-0 bg-white opacity-90"></div>
            <div className="absolute inset-0 ">
            <h1 className="text-black text-2xl font-semibold mt-20 ">I Grow By Helping People In Need</h1>
            <br />
            <input onChange={handleinput} placeholder='Search here' className="border-2" type="text" />
            <button   className="bg-[#FF444A] text-white px-2 py-1 rounded text-sm">Search</button>

            </div>
            </div>
        </div>
            );



}


export default Banner;