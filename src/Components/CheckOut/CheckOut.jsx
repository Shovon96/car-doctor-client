import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData()
    const { title, price, img, _id } = service;
    const {user} = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;

        const order = {
           customerName: name, 
           date, 
           price, 
           email,
           img,
           services_id:  _id,
           services: title
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Confirm Successfully')
            }
        })

    }

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-3">{title}</h1>
            <div>
                <div className="card w-4/6 mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleBooking} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date:</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price:</span>
                                </label>
                                <input type="text" name="price" defaultValue={'$'+ price} disabled className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="`Your Message`" name="message" className="textarea textarea-bordered textarea-md w-full" ></textarea>
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