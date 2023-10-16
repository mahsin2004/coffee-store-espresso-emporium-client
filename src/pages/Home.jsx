import Banner from "../component/Banner";
import Gallery from "../component/Gallery";
import Products from "../component/Products";
import Services from "../component/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;