
const OurProducts = () => {
    return (
        <div>
            <div className="text-center">
                <h5 className="font-bold text-[#FF3811]">Popular Products</h5>
                <h1 className="text-4xl font-bold my-4">Browse Our Products</h1>
                <p className="text-gray-400 my-3 px-80">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>

            {/* cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/1.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/2.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/3.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/4.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/5.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../../src/assets/assets/images/products/6.png" alt="" className="rounded-xl" />
                    </figure>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="font-bold text-[#FF3811]">Price: $20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;