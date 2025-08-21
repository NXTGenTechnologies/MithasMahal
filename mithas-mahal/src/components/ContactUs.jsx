'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const faqs = [
  {
    question: "How can I place an order?",
    answer: "You can place an order directly through our website or mobile app. Browse products, add to cart, and checkout securely.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we provide home delivery within selected areas. Delivery times depend on your location.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and wallet payments.",
  },
  {
    question: "Can I customize my sweets order?",
    answer: "Yes, we offer customization for bulk and special occasions. Please contact us for more details.",
  },
];

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-transparent" id="contact">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl text-center mb-8"
          id="contactus"
          variants={fadeInUp}
          custom={1}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="px-2 md:px-20 lg:px-32 items-center text-center mb-12 leading-relaxed"
          variants={fadeInUp}
          custom={2}
        >
          Do you have any question?
        </motion.p>

        <motion.form className="space-y-6" variants={fadeInUp} custom={3}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#9c7e38] text-white border cursor-pointer rounded-sm hover:bg-transparent hover:border hover:text-[#9c7e38] hover:border-[#9c7e38] transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-2xl md:text-4xl text-center mb-10"
            variants={fadeInUp}
            custom={1}
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-[#9c7e38] rounded-sm overflow-hidden"
                variants={fadeInUp}
                custom={index + 2}
              >
                <button
                  className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#9c7e38]" />
                  </motion.span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden px-4"
                >
                  <p className="py-3 text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
