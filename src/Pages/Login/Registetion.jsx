import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registetion = () => {

    const {createAnUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form  = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        form.reset()

        createAnUser(email, password)
        .then(result => result.user)
        .catch(error => alert(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-24">
            <img className="h-96" src="../../../src/assets/assets/images/login/login.svg" alt="" />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body border border-[#FF3811] rounded-lg">
                    <h1 className="text-4xl font-bold text-center mb-3">Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white font-bold hover:bg-[#FF3811]">Sign Up</button>
                    </div>
                <p className="text-center font-semibold my-2">Already have an account? Go <NavLink className='text-[#FF3811] font-bold underline' to='/login'>Sign In</NavLink></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Registetion;