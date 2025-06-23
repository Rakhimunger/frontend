import React from "react";

const BusTariffPage = () => {
  return (
    <div className="min-h-screen px-0 py-10 space-y-16">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900">
        AC Deluxe Bus 45 Seater (2+2)
      </h1>

      {/* Local Tariff Section */}
      <section className="px-0 sm:px-4 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 border-b pb-2 pl-4">
          Price List For Local Run
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border border-gray-400 text-center">
            <thead className="bg-blue-50 font-semibold text-gray-800">
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Select Package
                </th>
                <th className="border border-gray-400 px-4 py-2">Charges</th>
                <th className="border border-gray-400 px-4 py-2">Extra Km</th>
                <th className="border border-gray-400 px-4 py-2">Extra Hrs</th>
                <th className="border border-gray-400 px-4 py-2">
                  Night Charge After 10PM
                </th>
                <th className="border border-gray-400 px-4 py-2">Book Now</th>
              </tr>
            </thead>
            <tbody>
              {[
                "4Hrs 40KM",
                "48Hrs 80KM",
                "10Hrs 100KM",
                "12Hrs 150KM",
                "15Hrs 150KM",
                "24Hrs 300KM",
              ].map((pkg, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2">{pkg}</td>
                  <td className="border border-gray-300 px-4 py-2">RS.6500</td>
                  <td className="border border-gray-300 px-4 py-2">RS.45</td>
                  <td className="border border-gray-300 px-4 py-2">RS.300</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Driver/Helper RS.1500
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-blue-700 font-semibold hover:underline">
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-700 pl-4 space-y-1">
          <p>
            <strong>Note-1:</strong> Dear Customer, during local travel you have
            to pay toll parking as per the prescribed price.
          </p>
          <p>
            <strong>Note-2:</strong> Outstation Driver Helper Charges Rs.1500
            Per Day
          </p>
        </div>
      </section>

      {/* Outstation Tariff Section */}
      <section className="px-0 sm:px-4 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 border-b pb-2 pl-4">
          Price List For Outstation Run
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border border-gray-400 text-center">
            <thead className="bg-blue-50 font-semibold text-gray-800">
              <tr>
                <th className="border border-gray-400 px-4 py-2">Trip Type</th>
                <th className="border border-gray-400 px-4 py-2">Rate</th>
                <th className="border border-gray-400 px-4 py-2">Road Tax</th>
                <th className="border border-gray-400 px-4 py-2">Toll Tax</th>
                <th className="border border-gray-400 px-4 py-2">Min KM/Day</th>
                <th className="border border-gray-400 px-4 py-2">Book Now</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: "Round Trip",
                  rate: "₹60/km",
                  tax: "₹2000/day",
                  toll: "₹5.5/km",
                  minKm: "300 km/day",
                },
                {
                  type: "One Way Trip",
                  rate: "₹90/km",
                  tax: "₹2000/day",
                  toll: "₹5.5/km",
                  minKm: "300 km/day",
                },
              ].map((trip, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {trip.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {trip.rate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {trip.tax}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {trip.toll}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {trip.minKm}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-blue-700 font-semibold hover:underline">
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-700 pl-4">
          <p>
            <strong>Note:</strong> Toll, parking & driver/helper stay charges
            (₹1500/day) are additional.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BusTariffPage;
