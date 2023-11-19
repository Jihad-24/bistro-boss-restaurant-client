/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { name, category, recipe, price ,_id} = useLoaderData();

    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb and get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now sent the menu item data to the serverwith the imgbb image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                // show success alert
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <SectionTitle
                subHeading={"Refresh Info"}
                heading={"UPDATE ITEM"}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                        defaultValue={name}
                            type="text" placeholder="Recipe name"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6 my-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a Category?</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })}
                            defaultValue={price}
                                type="number" placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>                        </label>
                        <textarea {...register("recipe")}
                        defaultValue={recipe}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control my-6">
                        <input {...register("image", { required: true })}

                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <button className="btn bg-[#B58130]">
                        <span className="text-white flex gap-2">
                            Update Menu Item <FaUtensils></FaUtensils></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;