import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic =useAxiosPublic();
    const navigate=useNavigate();

    const handleGoogleSignIn =()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div className="px-8 pb-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary px-10 md:px-28">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;