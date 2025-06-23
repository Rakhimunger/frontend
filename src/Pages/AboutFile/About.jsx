import React from "react";
import antimg3 from "../../assets/images/antimg3.png";
import antsirimg from "../../assets/images/antsirimg.jpeg";
import antimg from "../../assets/images/antimg.png";

const About = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20 text-black">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={antimg3}
              alt="ANT Bus"
              className="rounded-xl shadow-lg w-full h-[160px] sm:h-[180px] md:h-[240px] object-cover hover:scale-105 transition duration-300"
            />
            <img
              src={antimg}
              alt="ANT Group"
              className="rounded-xl shadow-lg w-full h-[160px] sm:h-[180px] md:h-[240px] object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <img
            src={antsirimg}
            alt="ANT Sir"
            className="rounded-xl shadow-xl w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 mt-6 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
            Travel Smart with Affordable Bus Bookings in Delhi/NCR
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-800">A N T</span>, your
            trusted partner in convenient, reliable, and budget-friendly bus
            travel across Delhi/NCR. We’re committed to making your journey
            smooth and stress-free.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you're commuting across town or planning a weekend getaway,{" "}
            <span className="font-medium text-blue-800">A N T</span> ensures you
            travel in comfort, with safety and support just a call away.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Join thousands of happy travelers — book your ride today and feel
            the difference.
          </p>
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 transform hover:-translate-y-1">
            🚍 Book Your Ride Now
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "20+ Years",
            desc: "Trusted Industry Experience",
          },
          {
            title: "100+ Clients",
            desc: "Happy Customers Across NCR",
          },
          {
            title: "24/7 Support",
            desc: "Always Here When You Need Us",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white group p-6 rounded-xl shadow transition duration-300 hover:shadow-xl hover:-translate-y-1 border border-orange-200"
          >
            <h3 className="text-2xl font-bold text-orange-600 group-hover:scale-105 transition">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-800 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
