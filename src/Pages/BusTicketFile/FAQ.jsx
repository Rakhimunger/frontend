import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are the documents required while travelling by Ant Travel?",
    answer:
      "Passengers are required to carry a valid ID proof such as Aadhar card, PAN card, or driving license during the journey.",
  },
  {
    question: "What is your baggage policy?",
    answer:
      "1 medium suitcase or two small suitcases per guest is permitted. Excess charges will be levied in case of additional baggage.",
  },
  {
    question: "I missed my luggage/some contents of the luggage.",
    answer:
      "Please contact our support team immediately with your booking details. We will assist you in tracking and recovering the missing items.",
  },
  {
    question: "How to reschedule a ticket?",
    answer:
      "To reschedule, go to 'Manage Booking', enter your ticket details and choose a new date or time as per availability.",
  },
  {
    question: "How to modify a ticket?",
    answer:
      "Ticket modifications such as name or contact details can be done under the 'Manage Booking' section before 24 hours of departure.",
  },
  {
    question: "Are there any charges for rescheduling ticket?",
    answer:
      "Yes, minimal charges may apply depending on the time of rescheduling and seat availability.",
  },
  {
    question: "How to cancel a ticket?",
    answer:
      "Login to your account, go to 'Manage Booking' and select the ticket you want to cancel. Follow the steps to cancel.",
  },
  {
    question: "What are the cancellation charges?",
    answer:
      "Cancellation charges depend on the time of cancellation. Please refer to our cancellation policy page for details.",
  },
  {
    question: "When do I get my refund post cancellation?",
    answer:
      "Refunds are processed within 5-7 business days to the original payment method.",
  },
  {
    question: "My amount got debited but I did not get a confirmed ticket?",
    answer:
      "In case of payment failure, the amount is usually refunded within 5 working days. If not, contact our support with transaction details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-indigo-700 mb-6 sm:mb-10">
        🙋‍♀️ Frequently Asked Questions
      </h2>

      <div className="space-y-4 sm:space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl shadow-md border border-indigo-200 bg-white transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-4 sm:px-6 py-4 sm:py-5 text-left text-indigo-800 font-medium text-sm sm:text-lg transition-colors hover:bg-indigo-50"
            >
              <span className="w-[90%]">{`Q${index + 1}. ${
                faq.question
              }`}</span>
              <span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </span>
            </button>

            <div
              className={`px-4 sm:px-6 text-gray-700 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[300px] py-3 sm:py-4"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
