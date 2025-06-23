import React from "react";
import {
  FaBuilding,
  FaBus,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-4 text-blue-700 text-lg font-semibold">
    {icon}
    <span>{title}</span>
  </div>
);

const BusOperatorForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-6 px-4">
      <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-xl">
        <h2 className="text-xl sm:text-3xl md:text-4xl text-center font-bold text-blue-800 mb-4">
          Bus Operator Registration Form
        </h2>
        <p className="text-center text-black text-sm sm:text-base mb-8">
          Attach your buses, tempo travellers, minibuses and cars.
          <br />
          Please share the following details for us to onboard you.
        </p>

        <form className="space-y-10">
          <div>
            <SectionHeader icon={<FaBuilding />} title="Company Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-medium block mb-1">
                  Name of your company
                </label>
                <input
                  type="text"
                  placeholder="Enter name of your company"
                  className="inputBox"
                />
              </div>
              <div>
                <label className="font-medium block mb-1">
                  Enter your operator name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="inputBox"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="font-medium block mb-1">City</label>
                <select className="inputBox">
                  <option>Select a city</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader icon={<FaBus />} title="Vehicle Details" />
            <div className="bg-gray-50 border p-4 sm:p-6 rounded-lg">
              <p className="mb-4 font-semibold text-black text-sm sm:text-base">
                Please mention below the vehicles owned by you which you wish to
                place on Bus Hire.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Sedans & SUVs (4 - 7 seaters)",
                  "Tempo Travellers (9 - 20 seaters)",
                  "Mini Buses (20 - 30 seaters)",
                  "Large Buses (40+ seaters)",
                ].map((label, i) => (
                  <div key={i}>
                    <label className="font-medium block mb-1">{label}</label>
                    <input type="number" placeholder="0" className="inputBox" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader icon={<FaPhone />} title="Contact Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-medium block mb-1">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Eg: 9446440000"
                  className="inputBox"
                />
              </div>
              <div>
                <label className="font-medium block mb-1">
                  Alternate Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Eg: 9446440000"
                  className="inputBox"
                />
              </div>
              <div>
                <label className="font-medium block mb-1">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="inputBox"
                />
              </div>
              <div>
                <label className="font-medium block mb-1">
                  Alternate Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your alternate email address"
                  className="inputBox"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              icon={<FaMapMarkedAlt />}
              title="Full Office Address"
            />
            <textarea
              placeholder="Enter your full office address"
              className="inputBox h-24 resize-none"
            />
          </div>

          <div>
            <SectionHeader
              icon={<FaEnvelope />}
              title="PAN, GST and Cheque Details"
            />
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="font-medium block mb-1">
                  Enter PAN Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your PAN number"
                  className="inputBox"
                />
                <div className="border border-dashed border-blue-600 rounded-md p-3 mt-2 bg-blue-50 text-sm text-blue-800">
                  <button type="button">+ attach PAN card</button>
                  <p className="text-xs text-gray-500 mt-1">Format: image</p>
                </div>
              </div>
              <div className="border border-blue-300 rounded-lg bg-white shadow-sm p-4 mt-6 space-y-4">
                <div className="sm:flex sm:items-center sm:gap-6 space-y-4 sm:space-y-0">
                  <div>
                    <label className="font-medium block mb-1">
                      Do you have GSTIN?
                    </label>
                    <div className="flex gap-4 text-sm">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="gst"
                          className="accent-blue-600"
                        />{" "}
                        Yes
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="gst"
                          className="accent-blue-600"
                        />{" "}
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-medium block mb-1">
                      Attach Cancelled Cheque
                    </label>
                    <div className="border border-dashed border-blue-600 rounded-md p-3 bg-blue-50 text-sm text-blue-800">
                      <button
                        type="button"
                        className="text-blue-700 hover:underline"
                      >
                        + attach cancelled cheque
                      </button>
                      <p className="text-xs text-gray-500 mt-1">
                        Format: JPG, PNG or PDF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader icon={<FaEnvelope />} title="Attachments" />
            <div className="border border-blue-300 rounded-lg bg-white shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-semibold text-black text-base">
                  Payment Mandate Form
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Please download the form from the link below.
                </p>
                <a
                  href="#"
                  className="inline-block mt-3 bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800"
                >
                  &#8681; Payment Mandate Form.pdf
                </a>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-black">
                  Please ensure details are the same as the{" "}
                  <span className="text-blue-800">
                    cancelled cheque attached.
                  </span>
                </p>
                <button
                  type="button"
                  className="mt-3 text-blue-700 border border-blue-700 px-4 py-1.5 rounded hover:bg-blue-700 hover:text-white transition text-sm"
                >
                  + attach payment mandate form
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-2.5 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .inputBox {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.75rem;
          background-color: #f9fafb;
          outline: none;
          transition: 0.3s ease;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
        }
        .inputBox:focus {
          border-color: #3b82f6;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default BusOperatorForm;
