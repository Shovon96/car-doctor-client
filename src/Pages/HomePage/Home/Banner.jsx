
const Banner = () => {
    return (
        <>
            <div className="carousel w-full lg:h-[100vh] relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/1.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5 text-lg">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-0 text-white text-lg">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/2.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 bg-[#FF3811] border-0 text-white text-lg">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-0 text-white text-lg">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/3.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 bg-[#FF3811] border-0 text-white text-lg">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-0 text-white text-lg">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/4.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 bg-[#FF3811] border-0 text-white text-lg">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-0 text-white text-lg">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/5.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 bg-[#FF3811] border-0 text-white text-lg">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-0 text-white text-lg">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="../../../../src/assets/assets/images/banner/6.jpg" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5 bg-[#FF3811] border-0 text-white  text-lg">❮</a>
                        <a href="#slide1" className="btn btn-circle text-lg">❯</a>
                    </div>
                </div>
            </div>

            <div className="w-96 absolute top-1/2 ml-32">
                <h1 className="text-6xl font-bold text-white ">Affordable Price For Car Servicing</h1>
                <p className="text-white my-4">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                <button className="px-7 py-3 rounded-md font-bold text-white bg-[#FF3811]">Discover More</button>
                <button className="px-7 py-3 rounded-md font-bold text-[#FF3811] border ml-6">Latest Projects</button>
            </div>
        </>
    );
};

export default Banner;