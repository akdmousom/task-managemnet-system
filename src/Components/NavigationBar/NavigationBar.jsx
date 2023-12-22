import { Link, NavLink, useNavigate } from 'react-router-dom';
import './NavigationBars.scss'
import { Link as ScroolLink } from 'react-scroll';
import UseAuth from '../../Hooks/UseAuth';

const NavigationBar = () => {
    const { logOut, user, loading, setLoading } = UseAuth();
    const navigate = useNavigate();



    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log("Log-Out Successfully");
                navigate('/')
                setLoading(false)

            })
            .catch(err => {
                console.log(err + "Something wrong");
            })
    }
    const navItem = <>

        <li> <NavLink to='/'
            spy={'true'}
            smooth={'true'}
            offset={50}
            duration={500} >Home

        </NavLink></li>
        <li> <ScroolLink to='about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >About-us

        </ScroolLink></li>

        <li> <ScroolLink to='contactUs'
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >Contact-Us

        </ScroolLink></li>

    </>
    return (
        <div className="navbar z-10 bg-secondary sticky">
            <div className="navbar-start  ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navItem}

                    </ul>
                </div>
                <Link to={'/'}><img className='notter hidden lg:block' src="/notter.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            {user ? <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {
                        loading ? '' : <><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                <li><button onClick={handleSignout}>Logout</button></li>
                            </ul></>
                    }
                </div>
            </div> : <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'login'}><button>Login</button></Link></li>
                    </ul>
                </div>
            </div>}

        </div>
    );
};

export default NavigationBar;