import React from "react";

const SeaterAc = () => {
  return (
    <div className="bg-white font-bold py-10 px-4 sm:px-6 md:px-14 max-w-screen-lg mx-auto text-gray-800 text-sm sm:text-base space-y-6 leading-relaxed shadow-xl rounded-2xl">
      <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-6 border-b-2 border-blue-200 pb-4">
        27 Seater AC Deluxe Coach - Local & Outstation Bus Hire in Noida, Delhi
        NCR
      </h3>

      <p className="font-bold">
        ANT Travels offers premium bus services within and outside Delhi NCR,
        combining comfort, safety, and affordability. Our coaches are
        professionally maintained and sanitized after every trip, ensuring
        top-notch quality and reliability.
      </p>

      <p className="font-bold">
        Whether it's a wedding, school tour, corporate event, or Char Dham yatra
        — this 27-seater luxury bus provides the ideal experience for group
        travel at budget rates.
      </p>

      <p className="font-bold">
        Enjoy seamless journeys with wide seating, large luggage space, doorstep
        pickup, and professional drivers.
      </p>

      <ul className="list-none space-y-3 font-medium bg-gray-50 p-4 rounded-xl border border-gray-200">
        {[
          "Spacious interiors with plush seating",
          "Perfect for Char Dham, weddings & school tours",
          "Doorstep pickup in Delhi-NCR",
          "Most booked vehicle for large groups",
          "Budget-friendly yet premium experience",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start space-x-2 text-gray-800">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="font-bold">
        ANT Travels provides excellent bus services for bus travel for purposes
        within and outside Delhi NCR. Bus fares at ANT Travels can be easily
        availed on the online bus booking section. Our online bus booking
        section on the website will provide all the details. Bus fare rates in
        Delhi NCR with ANT Travels are carefully finalized keeping in mind the
        cost of luxury coach hire or bus fare in Delhi NCR.
      </p>

      <p className="font-bold">
        The bus price per km in Delhi NCR is the best compared to any bus fare
        price on any portal. At ANT Travels we ensure that your luxury bus is
        cleaned and well serviced after each ride when you book a bus for a day
        or more. Safety measures are followed as protocol by the experienced
        team and staff. Bus fare rates in Delhi by ANT Travels are worth the
        service we provide. We will ensure that each journey is memorable and
        comfortable while searching for bus for rent near me at any time of the
        year. 27-seater luxury bus hire in Delhi, Noida, Gurgaon is perfect for
        any trip and that too at an unbeatable price. When planning educational
        trips, the 27-seater bus fare per kilometer in Delhi NCR will fit any
        budget.
      </p>

      <p className="font-bold">
        Our 27-seater coach hire in Noida always provides the best travel
        experience as our luxury coach services in Delhi NCR have been voted
        many times as the best coach hire or rental in Bangalore. 30-seater AC
        luxury coach hire services for rent in Bangalore have excellent features
        to make long journeys stress-free and comfortable for all groups.
        30-seater luxury bus travel in Delhi NCR has luxurious interior
        features.
      </p>

      <p className="font-bold">
        27-seater bus rentals in Delhi NCR are the most popular option for
        traveling as a family. Choose a 27-seater luxury bus hire in Delhi NCR
        if one wishes to hire a bus to ride within the city limits. The bus
        27-seater rent per km in Delhi NCR rate is most appropriate for
        comfortable travel for outstation journeys too. The bus rental in Delhi
        NCR by ANT Travels provides ample leg space and luggage space to travel
        as a family. Passengers do not have to wait in crowded railway stations
        and local bus hires. Convenient drop points and pick-up spots make the
        journey planning simpler.
      </p>

      <p className="font-bold">
        One can access ample space for luggage and don't have to worry about
        safety on booking a 27-seater bus service in Delhi NCR. Deluxe and
        luxury bus fares or rental rates can be viewed on our website for bus
        rental services. Bus services are operated regularly to provide a
        seamless ride experience every time you choose our deluxe and luxury bus
        services for travel. The 27-seater luxury bus services in Delhi NCR are
        best suited for the whole year. Rent a bus for a day or travel for a few
        days in buses on rent or mini-tour buses on rent. Book our AC deluxe and
        luxury private bus at a minimum charge for a comfortable ride during
        summers. Get the best bus rental services to make every ride memorable.
      </p>

      <p className="font-bold">
        Now you can get complete bus booking for wedding, party, picnic, event
        and school tour at the most reasonable and unbeatable price. Bus booking
        for travelling to Char Dham with family or friends can be selected as
        per your wish. Now, book AC bus online for travel in all seasons at a
        charge that suits all budgets. The complete bus booking can be perfect
        to enjoy the entire journey with unforgettable moments. The bus fare or
        bus price per km in Delhi NCR is variable according to the number of
        seats.
      </p>

      <div className="pt-4 sm:pt-6 text-center">
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold text-sm sm:text-base px-6 py-2 sm:py-3 rounded-md sm:rounded-lg shadow-md transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SeaterAc;
