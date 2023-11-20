import {
    FaBook, FaCalendar, FaEnvelope, FaHome,
    FaList, FaShoppingBasket, FaShoppingCart, FaUsers, FaUtensils
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //  get admin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/addItems"}>
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/manageItems"}>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/manageBookings"}>
                                    <FaBook></FaBook>
                                    Manage Booking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/allUsers"}>
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={"/dashboard/userHome"}>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/reservation"}>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/cart"}>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/reviews"}>
                                        <MdReviews />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/paymentHistory"}>
                                        <FaBook></FaBook>
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* shared navlinks  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <FaList></FaList>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/shop"}>
                            <FaShoppingBasket></FaShoppingBasket>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/contact"}>
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/*dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;