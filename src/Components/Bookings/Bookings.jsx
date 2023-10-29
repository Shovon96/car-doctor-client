import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        const procced = confirm('Are you sure! delete it?')
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Delete successfully");
                        const remaining = bookings.filter(item => item._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(item => item._id !== id);
                    const updated = bookings.find(item => item._id === id);
                    updated.status = 'confirmed';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div>
            <h1 className="text-4xl text-center my-5">Your Bookings {bookings.length}</h1>
            <div className="min-h-screen">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booke =>
                                    <tr key={booke._id}>
                                        <th>
                                            <button onClick={() => handleDelete(booke._id)} className="w-10 h-10 text-xl rounded-full btn">X</button>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-24 rounded-xl">
                                                        <img src={booke?.img} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{booke?.services}</div>
                                                    <div className="text-sm opacity-70">{booke?.customerName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{booke?.price}</p>
                                        </td>
                                        <td>{booke?.date}</td>
                                        <th>
                                            {
                                                booke.status === 'confirmed' ?
                                                    <button>booknow</button> :
                                                    <button onClick={() => handleBookingUpdate(booke._id)} className="btn text-white bg-[#FF3811] btn-sm">Confirm</button>

                                            }
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;