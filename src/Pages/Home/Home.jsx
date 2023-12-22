import HeaderBanner from '../../Components/Home/Header/HeaderBanner';
import UseAuth from '../../Hooks/UseAuth';
import AboutUs from '../AboutUs/AboutUs';
import ContactUS from '../ContactUs/ContactUS';
import './Home.scss'
const Home = () => {
    const { user } = UseAuth();

    return (
        <>

            <div className='grid justify-evenly'>
                <HeaderBanner />

                <AboutUs />

                <ContactUS />
            </div>
        </>

    );
};

export default Home;