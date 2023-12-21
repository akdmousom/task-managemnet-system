import './HeaderBanner.scss'
const HeaderBanner = () => {
    return (

        <div id='hero' className="hero z-20  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl text-center lg:text-start lg:text-4xl font-bold">Notter Morder Task Management System</h1>
                    <p className="py-6 text-center lg:text-start">Morder task management application. This is an user friendly application with this application anyone can mange his/her task. Engineer, Doctor, Businessman, Student any professional background people can use this application.</p>
                    <div className='flex justify-center items-center lg:grid lg:justify-start lg:items-start'><button className="btn  btn-primary">Add Your Task</button></div>
                </div>
            </div>
        </div>

    );
};

export default HeaderBanner;