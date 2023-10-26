import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    const service = useLoaderData()
    const { title, _id } = service

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-3">{title}</h1>
            <div>
                <div className="card w-4/6 mx-auto shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Frist Name:</span>
                                </label>
                                <input type="text" placeholder="Frist Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name:</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone:</span>
                                </label>
                                <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        </div>
                        <div className="form-control mt-6 flex justify-center">
                            <button className="btn bg-[#FF3811] btn-block text-white font-bold">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;