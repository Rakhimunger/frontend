import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdGavel, MdPrivacyTip, MdContactSupport } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineUser } from "react-icons/hi";
import { TbBus } from "react-icons/tb";

const PolicyDetails = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <motion.h2
      className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2"
      {...fadeInUp}
    >
      <Icon className="text-orange-500 text-2xl" />
      {title}
    </motion.h2>
  );

  return (
    <div className="bg-gradient-to-b from-white via-slate-100 to-white text-gray-800 px-4 sm:px-6 md:px-10 lg:px-24 py-16">
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl border border-gray-200 p-5 sm:p-10"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-lg sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight border-b pb-4"
          {...fadeInUp}
        >
          Privacy Policy
        </motion.h1>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <section>
            <SectionHeader icon={MdPrivacyTip} title="1. Introduction" />
            <p>
              Welcome to <strong>ANT TRAVELS</strong>. We are committed to
              protecting your privacy and ensuring that your personal
              information is handled in a safe and responsible manner. This
              Privacy Policy outlines how we collect, use, disclose, and protect
              your information.
            </p>
          </section>

          <section>
            <SectionHeader
              icon={HiOutlineUser}
              title="2. Information We Collect"
            />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Personal Information:</strong> Name, address, email,
                phone number, and payment information.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Travel Information:</strong> Bookings, travel dates,
                destinations, and preferences.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Technical Info:</strong> IP address, browser, OS, access
                times.
              </li>
            </ul>
          </section>

          <section>
            <SectionHeader
              icon={TbBus}
              title="3. How We Use Your Information"
            />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Service Delivery:</strong> Manage your bookings and
                transport.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Communication:</strong> Booking updates and customer
                support.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Personalization:</strong> Tailor services to your
                preferences.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Legal Compliance:</strong> Meet legal obligations.
              </li>
            </ul>
          </section>

          <section>
            <SectionHeader
              icon={HiOutlineDocumentText}
              title="4. Information Sharing and Disclosure"
            />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Service Providers:</strong> Trusted partners for
                operations.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Legal Requirements:</strong> As required by law.
              </li>
              <li>
                <FaCheckCircle className="inline text-orange-500 mr-2" />{" "}
                <strong>Business Transfers:</strong> In case of mergers or
                sales.
              </li>
            </ul>
          </section>

          <section>
            <SectionHeader icon={MdGavel} title="5. Data Security" />
            <p>
              We implement proper security measures to safeguard your
              information. However, no method of internet transmission or
              storage is 100% secure.
            </p>
          </section>

          <section>
            <SectionHeader
              icon={HiOutlineUser}
              title="6. Your Choices and Rights"
            />
            <p>
              You may access, update, or delete your data anytime. To exercise
              rights, contact us at{" "}
              <a href="tel:+9118001027408" className="text-blue-600 underline">
                +91-1800 102 7408
              </a>
              .
            </p>
          </section>

          <section>
            <SectionHeader
              icon={MdPrivacyTip}
              title="7. Cookies and Tracking Technologies"
            />
            <p>
              We use cookies to enhance your browsing experience. You can
              disable cookies in your browser, but it may limit functionality.
            </p>
          </section>

          <section>
            <SectionHeader
              icon={HiOutlineDocumentText}
              title="8. Changes to This Privacy Policy"
            />
            <p>
              We may update this policy from time to time. Any changes will be
              posted with updated date. Please review regularly.
            </p>
          </section>

          <section>
            <SectionHeader icon={MdContactSupport} title="9. Contact Us" />
            <p className="font-bold">ANT TRAVELS</p>
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
            <p>
              Email:{" "}
              <a
                href="mailto:mail@anttravels.com"
                className="text-blue-600 underline"
              >
                mail@anttravels.com
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PolicyDetails;
