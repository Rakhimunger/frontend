import React from "react";
import { BusFront, CalendarCheck2, UserCheck } from "lucide-react";

const BookBusant = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white px-4 py-8 sm:px-8 lg:px-20 font-poppins">
      {/* Main Heading */}
      <div className="text-center mb-8 px-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-tight tracking-wide">
          Book Bus Hire with{" "}
          <span className="text-blue-700 drop-shadow-md">ANT</span>
        </h1>
        <p className="text-black mt-4 text-sm sm:text-base max-w-xl mx-auto font-medium">
          A N T lets you book buses from anywhere in Delhi/NCR at the lowest
          prices
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto space-y-5 text-black text-base leading-relaxed text-justify px-3 tracking-wide">
        <p>
          To book your bus on A N T, simply fill in the required information in
          the required fields and customize your journey. A N T gives you the
          privilege to plan your own journey. We offer you a range of options
          for your journey. You can choose AC Sleeper Bus, Semi-Sleeper Bus, AC
          Deluxe Bus, AC Luxury Bus, Volvo Bus, Bharat Benz Bus or any other
          type of bus of your choice for your journey. You can search for bus
          availability when booking a bus and enter the date. We also give you
          the facility to choose your favorite bus from all the buses available.
        </p>

        <p className="text-black font-semi-bold ">
          Thanks to our autofill function, you never need to enter your details
          when booking a bus again. Advanced passenger details forecast will
          prompt profile information based on your past booking reservation
          history.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-3">
        {[
          {
            icon: <BusFront className="text-blue-900 w-12 h-12 shrink-0" />,
            title: "Wide Bus Options",
            desc: "From luxury to budget-friendly",
          },
          {
            icon: (
              <CalendarCheck2 className="text-blue-900 w-12 h-12 shrink-0" />
            ),
            title: "Flexible Booking",
            desc: "Fully customizable journeys",
          },
          {
            icon: <UserCheck className="text-blue-900 w-12 h-12 shrink-0" />,
            title: "Smart Autofill",
            desc: "Instant and quick reservations",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center space-x-4 p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
          >
            {icon}
            <div>
              <h4 className="font-semibold text-blue-900 text-lg sm:text-xl mb-1">
                {title}
              </h4>
              <p className="text-gray-600 text-sm font-medium">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center px-3">
        <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white font-semibold text-base sm:text-lg py-3 sm:py-4 px-12 sm:px-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#E64A19] hover:from-[#2C3A7D] hover:to-[#E64A19]">
          Explore Booking Options
        </button>
      </div>
    </div>
  );
};

export default BookBusant;
