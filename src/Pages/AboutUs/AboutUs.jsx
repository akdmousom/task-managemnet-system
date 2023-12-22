import "./AboutUs.scss"
function AboutUs() {


  return (
    <div id="about" className="aboutUs min-h-screen lg:mt-20 my-10  ">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10">About Us</h1>
      <p className="pb-6 text-center">
        🚀 Welcome to NOTEER - Empowering Productivity Through Innovation!

        At NOTEER, we are dedicated to revolutionizing the way businesses handle their tasks and projects. As a leading software company, we take pride in developing cutting-edge solutions to streamline your workflow and boost overall efficiency.

        🌐 Our Mission: Transforming Challenges into Opportunities

        In a fast-paced and dynamic business environment, effective task management is the key to success. That&apos;s where NOTEER steps in. Our mission is to empower organizations with intuitive and powerful task management systems, providing a seamless experience for teams to collaborate, communicate, and conquer their goals.</p>

      <h2 className="my-6 text-center text-2xl lg:text-4xl font-bold">Our Team Member</h2>
      
     <div className="grid grid-cols-1 w-fu md:grid-cols-2 gap-4 mx-4 lg:grid-cols-3">

 
        <div className="card  bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/MZs1KtH/4.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Mrs.Melanie</h2>
            <p>Product Manager</p>

          </div>
        </div>

    
        <div className="card  bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/Fmt3jfQ/2.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Aslee Jorge</h2>
            <p>Developer</p>

          </div>
        </div>

 
        <div className="card  bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/WPP62Xs/3.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Stephnie j deo</h2>
            <p>Lead marketer</p>

          </div>
        </div>


     </div>
    </div>
  );
}

export default AboutUs;