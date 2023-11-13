import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate=useNavigate();

    const onSubmit = (data) => {
        // console.log(data)
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name , data.PhotoURL)
                .then(() => {
                    console.log('user profile update');
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "profile has been updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }).catch((error) => {
                    console.log(error.message);
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="email"
                                    {...register("name")}
                                    name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL"
                                    {...register("PhotoURL")}
                                    className="input input-bordered" required />
                                {errors.PhotoURL &&
                                    <p className="text-red-600">Photo URL is required</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")}
                                    placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                    placeholder="password" name="password"
                                    className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">password must have one uppercase, one lowercase, one number, one special charecter</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">password must be 6 charecters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">password must be less then 20 charecters</p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] text-center pb-4'><small>Already registered? <Link to={'/login'}>Go to log in</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;