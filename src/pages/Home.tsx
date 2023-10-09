import Banner from "../components/Banner";
import Deals from "../components/Deals";
import SearchBar from "../components/searchBar";


const Home = () => {
    return (
       <>
         <SearchBar/>
          <Banner/>
          <Deals/>
       </>
    );
};

export default Home;