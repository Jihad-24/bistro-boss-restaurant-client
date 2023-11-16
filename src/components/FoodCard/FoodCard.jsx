import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();



    const handleAddtoCart = () => {
        if (user && user.email) {
            // send cart item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged in?",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //    send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute py-1 px-3 rounded right-5 top-4">${price}</p>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{recipe}</p>
                    <div onClick={handleAddtoCart}
                        className="card-actions justify-center">
                        <button className="btn btn-ghost border-0 bg-slate-200 border-[#BB8506] btn-outline border-b-4"><span className="text-[#BB8506]">add to cart</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;