import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <img className="h-[40px]" src="https://i.ibb.co/0hVVqVQ/Logo.png" alt="" />
    
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      
      <li><NavLink to='/' activeClassName="active"><a>Home</a></NavLink></li>
      <li><NavLink to='/donation' activeClassName="active"><a>Donation</a></NavLink></li>
      <li><NavLink to='/Statistics' activeClassName="active"><a>Statistics</a></NavLink></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;