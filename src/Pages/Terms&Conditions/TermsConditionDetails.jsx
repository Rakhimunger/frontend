import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdGavel, MdPrivacyTip, MdContactSupport } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineUser } from "react-icons/hi";
import { TbBus } from "react-icons/tb";

const TermsConditionDetails = () => {
  const Bullet = ({ children }) => (
    <li className="flex items-start gap-2 text-sm sm:text-base">
      <FaCheckCircle className="mt-1 text-orange-500 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );

  const sections = [
    {
      title: "Introduction",
      icon: <HiOutlineDocumentText className="text-xl text-blue-500" />,
      content: (
        <p>
          Welcome to <span className="font-bold">ANT TRAVELS</span> ("we",
          "our", "us"). By using our car and bus services, you agree to comply
          with and be bound by the following terms and conditions. Please review
          them carefully.
        </p>
      ),
    },
    {
      title: "1. Definitions",
      icon: <HiOutlineUser className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>Service:</strong> Transportation services provided by our
            cars and buses.
          </Bullet>
          <Bullet>
            <strong>User/Customer:</strong> Anyone using our services.
          </Bullet>
          <Bullet>
            <strong>Booking:</strong> Reservation of car or bus services.
          </Bullet>
          <Bullet>
            <strong>Driver:</strong> Person operating the vehicle.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "2. Booking and Reservations",
      icon: <TbBus className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>Booking Confirmation:</strong> Bookings must be confirmed
            through our website, app, or customer service. A confirmation email
            or message will be sent to the user.
          </Bullet>
          <Bullet>
            <strong>Payment:</strong> Payment must be made at the time of
            booking unless otherwise agreed. We accept various payment methods
            including credit/debit cards and online transfers.
          </Bullet>
          <Bullet>
            <strong>Changes to Booking:</strong> Users can cancel bookings
            within a specified period before the service date. A cancellation
            fee may apply as per our cancellation policy.
          </Bullet>
          <Bullet>
            <strong>Changes:</strong> Any changes to the booking (e.g., time,
            date, destination) should be communicated as early as possible.
            Additional charges may apply.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "3. Service Usage",
      icon: <TbBus className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>User Conduct:</strong> Users are expected to conduct
            themselves in a respectful and lawful manner during the use of our
            services. Any inappropriate behavior may result in termination of
            the service without a refund.
          </Bullet>
          <Bullet>
            <strong>Safety and Compliance:</strong> All users must comply with
            safety regulations and instructions provided by the driver. Seat
            belts must be worn at all times.
          </Bullet>
          <Bullet>
            <strong>Luggage and Personal Items:</strong> Users are responsible
            for their personal items and luggage. We are not liable for any loss
            or damage to personal belongings.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "4. Responsibilities",
      icon: <HiOutlineUser className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>Our Responsibility:</strong> We will provide safe, timely,
            and efficient transportation services. In case of unforeseen delays
            or issues, we will communicate with the user promptly.
          </Bullet>
          <Bullet>
            <strong>User Responsibility:</strong> Users must ensure accurate
            information is provided at the time of booking. Any special
            requirements or medical conditions should be communicated in
            advance.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "5. Limitation of Liability",
      icon: <MdGavel className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>Service Disruption:</strong> We are not liable for any
            delays, cancellations, or disruptions caused by factors beyond our
            control, including but not limited to traffic, weather conditions,
            or mechanical failures.
          </Bullet>
          <Bullet>
            <strong>Personal Injury or Property Damage:</strong> We are not
            liable for any personal injury or property damage occurring during
            the use of our services unless caused by our negligence.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "6. Privacy and Data Protection",
      icon: <MdPrivacyTip className="text-xl text-blue-500" />,
      content: (
        <ul className="space-y-2 ml-1">
          <Bullet>
            <strong>Personal Information:</strong> We collect and use personal
            information in accordance with our Privacy Policy. By using our
            services, you consent to the collection and use of your personal
            information.
          </Bullet>
          <Bullet>
            <strong>Data Security:</strong> We take reasonable measures to
            protect user data from unauthorized access, use, or disclosure.
          </Bullet>
        </ul>
      ),
    },
    {
      title: "7. Changes to Terms and Conditions",
      icon: <HiOutlineDocumentText className="text-xl text-blue-500" />,
      content: (
        <p>
          We reserve the right to modify these terms and conditions at any time.
          Any changes will be effective immediately upon posting on our website.
          Users are encouraged to review the terms periodically.
        </p>
      ),
    },
    {
      title: "8. Governing Law",
      icon: <MdGavel className="text-xl text-blue-500" />,
      content: (
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws. Any disputes arising from these terms will be resolved
          in the courts.
        </p>
      ),
    },
    {
      title: "9. Contact Information",
      icon: <MdContactSupport className="text-xl text-blue-500" />,
      content: (
        <div className="space-y-1">
          <p className="font-bold">ANT TRAVELS</p>
          <p>
            For any questions or concerns regarding these terms and conditions,
            please contact us at:
          </p>
          <p>
            B-128, Transport Nagar, Sector-69, Noida, 201301, Uttar Pradesh,
            India
          </p>
          <p>
            Tel:{" "}
            <a href="tel:+9118001027408" className="text-blue-600 underline">
              +91-1800 102 7408
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-100 to-white text-gray-800 px-4 sm:px-6 md:px-10 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl border border-gray-200 p-5 sm:p-10 transition-all duration-300">
        {/* 🔵 Heading fixed for small screens */}
        <h1 className="text-lg sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight border-b pb-4 whitespace-nowrap">
          Terms & Conditions - Car & Bus Services
        </h1>

        <section className="space-y-10 text-sm sm:text-base leading-relaxed">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group hover:bg-slate-50 p-4 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-orange-500"
            >
              <div className="flex items-center gap-2 mb-2">
                {sec.icon}
                <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
                  {sec.title}
                </h2>
              </div>
              <div className="text-gray-700">{sec.content}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TermsConditionDetails;
