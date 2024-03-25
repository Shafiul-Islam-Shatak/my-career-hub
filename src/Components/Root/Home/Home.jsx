import Banner from "../../Banner/Banner";
import Catagory from "../../CatagoryList/Catagory";
import Featured from "../../FeaturedJobs/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Featured></Featured>
        </div>
    );
};

export default Home;