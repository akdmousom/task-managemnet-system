import HeaderBanner from '../../Components/Home/Header/HeaderBanner';
import AboutUs from '../AboutUs/AboutUs';
import './Home.scss'
const Home = () => {
    return (
        <>
         <div className='wrapper z-[-10] ' id='home'>
            <HeaderBanner/>
            
        </div>
        
        <AboutUs/>
        </>
       
    );
};

export default Home;