import About from "../component/About";
import Banner from "../component/Banner";
import OurProducts from "../component/OurProducts";
import Services from "../component/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;