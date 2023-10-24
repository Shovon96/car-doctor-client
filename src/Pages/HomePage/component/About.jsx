
const About = () => {
    return (
        <div className="flex my-12">
            <div className="flex-1">
                <img className="rounded-lg relative w-5/6" src="../../../../src/assets/assets/images/about_us/person.jpg" alt="" />
                <img className="rounded-lg absolute h-52 w-1/5 left-96 -bottom-[490px] border-8 border-white" src="../../../../src/assets/assets/images/about_us/parts.jpg" alt="" />
            </div>
            <div className="flex-1 px-14">
                <h4 className="text-[#FF3811] font-bold">About Us</h4>
                <h1 className="text-5xl font-bold mt-3 pr-40">We are qualified & of experience in this field</h1>
                <p className="text-gray-400 my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className="text-gray-400 my-4">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="px-7 py-3 bg-[#FF3811] text-white font-bold rounded-md">Get More Info</button>
            </div>
        </div>
    );
};

export default About;