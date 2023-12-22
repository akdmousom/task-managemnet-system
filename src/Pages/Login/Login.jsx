import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginUser, signInWithGoogle } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(currentUser => {
                const user = currentUser
                if (user) {

                    return navigate(location?.state ? location.state : '/')

                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {

                if (result) {

                    return navigate(location?.state ? location.state : '/')
                    
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control justify-center flex items-center">
                            <label className="label">
                                <span className="label-text text-center">Login With Google</span>
                            </label>
                            <button onClick={handleGoogleLogin} className="btn"><FcGoogle /></button>
                        </div>
                        <p className="text-center"> Don&apos;t have an account <span className="text-primary"><Link to={'/register'}>Register</Link></span> </p>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;