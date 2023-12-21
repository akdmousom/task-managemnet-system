
import "./AboutUs.scss"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function AboutUs() {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div id="about" className="aboutUs min-h-screen lg:mt-20 my-10  ">
            <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10">About Us</h1>
            <p className="pb-6 text-center">
                🚀 Welcome to NOTEER - Empowering Productivity Through Innovation!

                At NOTEER, we are dedicated to revolutionizing the way businesses handle their tasks and projects. As a leading software company, we take pride in developing cutting-edge solutions to streamline your workflow and boost overall efficiency.

                🌐 Our Mission: Transforming Challenges into Opportunities

                In a fast-paced and dynamic business environment, effective task management is the key to success. That&apos;s where NOTEER steps in. Our mission is to empower organizations with intuitive and powerful task management systems, providing a seamless experience for teams to collaborate, communicate, and conquer their goals.</p>

                <h2 className="my-6 text-center text-2xl lg:text-4xl font-bold">Our Team Member</h2>
            {/* <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img className=" object-cover" src="https://i.ibb.co/Fmt3jfQ/2.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img className=" object-cover" src="https://i.ibb.co/wyLp2Hy/1.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img className=" object-cover" src="https://i.ibb.co/WPP62Xs/3.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img className=" object-cover" src="https://i.ibb.co/MZs1KtH/4.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img className=" object-cover " src="https://i.ibb.co/WPP62Xs/3.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide6"><img className=" object-cover" src="https://i.ibb.co/f40KYRS/6.jpg" alt="" /></div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}

export default AboutUs;