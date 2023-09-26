import { NavLink } from "react-router-dom";


const Navbar = () => {


    return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <img className="h-[40px]" src="https://i.ibb.co/0hVVqVQ/Logo.png" alt="" />
    
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-4  ">
      
          <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink to='/donation' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
        }>Donation</NavLink>
      <NavLink to='/Statistics' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-400 underline" : ""
        }>Statistics</NavLink>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;