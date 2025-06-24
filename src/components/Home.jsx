import React from "react";
import HERO from "../assets/HERO.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import Users from "../assets/Users.png";
import Scanner from "../assets/Scanner.png";
import Category from "../assets/Category.png";
import Calendar from "../assets/Calendar.png";
import Document from "../assets/Document 2.png";
import Fifth from "../assets/Fifth.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      {/* HERO SECTION */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-neutralDGrey">
              Lessons and insights <br />
              <span className="text-brandPrimary">from 8 years</span>
            </h1>
            <p className="text-base text-neutralGrey">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="bg-brandPrimary text-white py-3 px-6 rounded hover:bg-neutralDGrey transition-all duration-300">
              Register
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 hidden md:block">
            <img src={HERO} alt="Hero Illustration" className="max-w-lg" />
          </div>
        </div>
      </div>

      {/* OUR CLIENTS SECTION */}
      <div className="bg-white py-12">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutralDGrey mb-4">
            Our Clients
          </h2>
          <p className="text-neutralGrey mb-8">
            We have been working with some Fortune 500+ clients
          </p>

          {/* Clients Logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 -mt-9 gap-6 items-center justify-center">
            <img src={first} alt="Client 1" className="mx-auto -mt-5 h-40" />
            <img src={second} alt="Client 2" className="mx-auto pb-12 h-48" />
            <img src={third} alt="Client 3" className="mx-auto pb-6 h-28" />
            <img src={first} alt="Client 4" className="mx-auto -mt-4 h-40" />
            <img src={second} alt="Client 5" className="mx-auto pb-12 h-48" />
            <img src={third} alt="Client 6" className="mx-auto pb-6 h-28" />
          </div>
        </div>
      </div>

      {/* Manage Your Community Section */}
        <div className="bg-neutralSilver py-16 -mt-16">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutralDGrey mb-4">
            Manage your entire community <br /> in a single system
            </h2>
            <p className="text-neutralGrey mb-10">
            Who is Nexcent suitable for?
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img src={Scanner} alt="Membership Icon" className="mx-auto mb-4 h-12" />
                <h4 className="text-xl font-semibold text-brandPrimary mb-2">Membership Organisations</h4>
                <p className="text-neutralGrey">
                Our membership management software provides full automation of membership renewals and payments.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img src={Users} alt="National Associations" className="mx-auto mb-4 h-12" />
                <h4 className="text-xl font-semibold text-brandPrimary mb-2">National Associations</h4>
                <p className="text-neutralGrey">
                Our membership management software provides full automation of membership renewals and payments.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img src={Category} alt="Clubs and Groups" className="mx-auto mb-4 h-12" />
                <h4 className="text-xl font-semibold text-brandPrimary mb-2">Clubs And Groups</h4>
                <p className="text-neutralGrey">
                Our membership management software provides full automation of membership renewals and payments.
                </p>
            </div>
            </div>
        </div>
        </div>

        {/* Pixelgrade Section */}
        <div className="bg-white py-16">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Image */}
            <div className="flex-1">
            <img src={fourth} alt="Pixelgrade" className="w-full max-w-md mx-auto" />
            </div>

            {/* Right Content */}
            <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutralDGrey mb-4">
                The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-neutralGrey mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="bg-brandPrimary text-white py-3 px-6 rounded hover:bg-neutralDGrey transition-all duration-300">
                Learn More
            </button>
            </div>
        </div>
        </div>

        {/* Helping Local Business Section */}
        <div className="bg-neutralSilver py-16">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Left Side: Heading + Paragraph */}
            <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutralDGrey">
                Helping a local <br /> <span className="text-brandPrimary">business reinvent itself</span>
            </h2>
            <p className="text-neutralGrey">
                We reached here with our hard work and dedication. The team helped us bring ideas to life. From branding to web design, they’ve been with us every step of the way.
            </p>
            </div>

            {/* Right Side: Image + Numbers Grid */}
            <div className="flex-1 space-y-8">
          

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                <img src={Calendar} alt="Members" className="mx-auto mb-2 ml-12 h-8" />
                <h3 className="text-3xl font-bold text-neutralDGrey">2,245,341</h3>
                <p className="text-brandPrimary ml-8">Members</p>
                </div>
                <div>
                <img src={Document} alt="Members" className="mx-auto mb-2 ml-11 h-8" />
                <h3 className="text-3xl font-bold text-neutralDGrey">46,328</h3>
                <p className="text-brandPrimary ml-8">Clubs</p>
                </div>
                <div>
                <img src={Document} alt="Members" className="mx-auto mb-2 ml-12 h-8" />
                <h3 className="text-3xl font-bold text-neutralDGrey">828,867</h3>
                <p className="text-brandPrimary">Event Bookings</p>
                </div>
                <div>
                <img src={Calendar} alt="Members" className="mx-auto mb-2 ml-12 h-8" />  
                <h3 className="text-3xl font-bold text-neutralDGrey">1,926,436</h3>
                <p className="text-brandPrimary ml-8">Payments</p>
                </div>
            </div>
            </div>

        </div>
        </div>

        {/* Site Footer Design Section */}
            <div className="bg-white py-16">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* Left Image */}
                <div className="flex-1">
                <img src={Fifth} alt="Site footer" className="w-screen max-w-sm mx-auto" />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutralDGrey mb-4">
                    How to design your site footer like we did
                </h2>
                <p className="text-neutralGrey mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className="bg-brandPrimary text-white py-3 px-6 rounded hover:bg-neutralDGrey transition-all duration-300">
                    Learn More
                </button>
                </div>
            </div>
            </div>

    </div>
  );
};

export default Home;
