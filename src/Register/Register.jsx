import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    console.log(createUser);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .than(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Registration</h1>
                        </div>
                        <div className="card flex-shrink-0  md:w-[500px] shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">registration</button>
                                    </div>
                                </form>
                                <p>  please <Link to="/login" className="text-blue-600 hover:underline text-xl" >Login</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;