import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";


const NavBar = () => {
    const { user ,logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                title: "Log Out Successfull",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/secret'}>Our Secret</NavLink></li>
        <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>
        {
            user ? <> 
            <button onClick={handleLogOut} className="btn btn-ghost btn-sm">Sign Out</button>
            </> : <>
                <li><NavLink to={'/login'}>Login</NavLink></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  items-center  menu-horizontal">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">Get started</button>
                </div>
            </div>
        </>
    );
};

export default NavBar;