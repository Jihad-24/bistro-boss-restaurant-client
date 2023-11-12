

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute py-1 px-3 rounded right-5 top-4">${price}</p>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-ghost border-0 bg-slate-200 border-[#BB8506] btn-outline border-b-4"><span className="text-[#BB8506]">add to cart</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;