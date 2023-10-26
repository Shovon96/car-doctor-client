import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-8">
            <div className="text-center">
                <h5 className="font-bold text-[#FF3811]">Services</h5>
                <h1 className="text-4xl font-bold my-4">Our Service Area</h1>
                <p className="text-gray-400 my-3 px-80">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            {/* services cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    services.map(serve =>
                        <div key={serve._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={serve.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-lg font-bold">{serve.title}</h2>
                                <p className="text-[#FF3811] font-semibold">Price: ${serve.price}</p>
                            </div>
                            <Link  to={`/checkOut/${serve._id}`} className="btn btn-primary w-1/3 mb-2 ml-5">Book Now</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;