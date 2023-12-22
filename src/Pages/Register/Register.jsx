import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";



const Register = () => {
    const { createUser, updateUserInfo, signInWithGoogle } = UseAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then((userCredential) => {

                navigate('/')
                // Signed up 
                updateUserInfo(data.name, data.img)
                const user = userCredential.user;
                console.log(user);
                // ...
            })

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((result)=>{
            if (result) {

                return navigate('/')
                
            }

        })
        .catch((error)=>{
            console.log(error);
        })
    }


    return (
        // <div className=" max-h-screen">
        //     <div className="hero bg-base-200 h-full">
        //         <div className="hero-content flex-col lg:flex-row-reverse">
        //             <div className="card shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">

        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="w-80 md:w-96 mx-auto justify-center items-center flex">

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name: </span>
                    </label>
                    <input type="text" {...register("name")} placeholder="Full Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url: </span>
                    </label>
                    <input type="text" {...register("img")} placeholder="Photo Url" className="input input-bordered" required />
                </div>
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
                <p className="text-center"> Allready have an account <span className="text-primary"><Link to={'/login'}>Login</Link></span> </p>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>

        </div>
    );
};

export default Register;