import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF3811] px-5 py-2 rounded-md text-white font-bold" : "px-5 py-2 border rounded-md font-bold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF3811] px-5 py-2 rounded-md text-white font-bold" : "px-5 py-2 border rounded-md font-bold"
            }
        >
            About
        </NavLink>
        <NavLink
            to="/servisec"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF3811] px-5 py-2 rounded-md text-white font-bold" : "px-5 py-2 border rounded-md font-bold"
            }
        >
            Services
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF3811] px-5 py-2 rounded-md text-white font-bold" : "px-5 py-2 border rounded-md font-bold"
            }
        >
            Blog
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF3811] px-5 py-2 rounded-md text-white font-bold" : "px-5 py-2 border rounded-md font-bold"
            }
        >
            Contact
        </NavLink>
    </>

    return (
        <div className="navbar shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="h-16" src="../../../src/assets/assets/logo.svg" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login'>
                    <button className="border border-[#FF3811] text-[#FF3811] font-bold px-5 py-2 rounded-md">Appointment</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;