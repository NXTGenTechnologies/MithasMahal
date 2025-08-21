import React, { useState, useEffect, useRef } from "react";

import t1 from '../assets/images/t1.webp';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';


const testimonials = [
  {
    name: "Sameer Gautam",
    city: "Gurugram",
    stars: 5,
    feedback: "Absolutely delicious sweets! Mithas Mahal is my go-to for every celebration.",
    image: t1,
  },
  {
    name: "Smriti Kumari",
    city: "Chennai",
    stars: 4,
    feedback: "The quality and freshness are unmatched. Highly recommend their Kaju Katli!",
    image: t4,
  },
  {
    name: "Rahul Verma",
    city: "Mumbai",
    stars: 5,
    feedback: "Beautiful packaging and amazing taste. Perfect for gifting.",
    image: t3,
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    stars: 5,
    feedback: "Every bite reminds me of home. Mithas Mahal never disappoints.",
    image: t2,
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    stars: 4,
    feedback: "Great variety and authentic flavors. The staff is very friendly too.",
    image: t5,
  },
  {
    name: "Anjali Patel",
    city: "Ahmedabad",
    stars: 5,
    feedback: "Love the innovative sweets! The Avocado Rasgulla is a must-try.",
    image: t6,
  },
];

const MAX_FEEDBACK_LENGTH = 110;

function StarRating(props) {
  const { stars } = props;
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < stars ? "text-yellow-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [startIdx, setStartIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    city: "",
    stars: 5,
    feedback: "",
  });
  const timerRef = useRef();
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 'small';
      if (window.innerWidth < 1024) return 'medium';
      return 'large';
    }
    return 'large';
  }

  function getVisibleCount() {
    switch(screenSize) {
      case 'small': return 1;
      case 'medium': return 2;
      case 'large': return 3;
      default: return 3;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => {
    clearInterval(timerRef.current);
    setStartIdx((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    setStartIdx((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const count = getVisibleCount();
    let visible = [];
    for (let i = 0; i < count; i++) {
      const index = (startIdx + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const handleMoreClick = (e, idx) => {
    e.stopPropagation();
    const element = document.getElementById(`feedback-${idx}`);
    if (element) {
      if (element.style.maxHeight) {
        element.style.maxHeight = null;
        element.classList.add('overflow-hidden');
        element.classList.remove('overflow-auto');
      } else {
        element.style.maxHeight = element.scrollHeight + "px";
        element.classList.remove('overflow-hidden');
        element.classList.add('overflow-auto');
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarSelect = (stars) => {
    setForm((prev) => ({ ...prev, stars }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setForm({ name: "", city: "", stars: 5, feedback: "" });
  };

  return (
  <section className="py-16 mb-12 bg-transparent px-4 sm:px-6 lg:px-20 xl:px-32 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-8 text-gray-950">
          What Our Customers Say
        </h2>
        <div className="flex justify-between items-center mb-4 relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-[#9c7e38] hover:bg-yellow-800 text-white p-2 rounded-full shadow transition cursor-pointer"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 flex flex-row gap-8 justify-center items-stretch overflow-hidden px-10">
            {getVisibleTestimonials().map((t, idx) => {
              const truncated = t.feedback.length > MAX_FEEDBACK_LENGTH;
              return (
                <div
                  key={`${t.name}-${idx}`}
                  className="bg-yellow-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-between
                    text-center min-w-[280px] max-w-[320px] h-[260px] transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mb-2 object-cover border-4 border-yellow-200"
                    />
                    <StarRating stars={t.stars} />
                    <div
                      id={`feedback-${idx}`}
                      className="text-base italic text-gray-700 mb-2 leading-snug overflow-hidden transition-all duration-300"
                      style={{ height: '70px' }}
                    >
                      {truncated ? (
                        <>
                          {t.feedback.slice(0, MAX_FEEDBACK_LENGTH)}
                          <span
                            className="text-yellow-700 font-semibold ml-1 cursor-pointer"
                            onClick={(e) => handleMoreClick(e, idx)}
                          >
                            ...more
                          </span>
                        </>
                      ) : (
                        t.feedback
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-yellow-900">{t.name}</span>
                    <span className="text-sm text-gray-500">{t.city}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-[#9c7e38] hover:bg-yellow-800 text-white p-2 rounded-full shadow transition cursor-pointer"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                startIdx % testimonials.length === i 
                  ? 'w-6 bg-[#9c7e38]' 
                  : 'w-2 bg-gray-300'
              }`}
              onClick={() => setStartIdx(i)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#9c7e38] hover:bg-transparent border border-[#9c7e38] text-white hover:text-[#9c7e38] px-6 py-3 rounded-lg shadow font-semibold cursor-pointer transition"
          >
            Give Feedback
          </button>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-black">Give Your Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleFormChange}
                className="w-full border border-[#9c7e38] rounded px-3 py-2"
              />
              <input
                type="text"
                name="city"
                required
                placeholder="City"
                value={form.city}
                onChange={handleFormChange}
                className="w-full border border-[#9c7e38] rounded px-3 py-2"
              />
              <div>
                <span className="block mb-1 text-black font-medium">Stars:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleStarSelect(i + 1)}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-7 h-7 ${form.stars > i ? "text-yellow-500" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                name="feedback"
                required
                placeholder="Your feedback"
                value={form.feedback}
                onChange={handleFormChange}
                className="w-full border border-[#9c7e38] rounded px-3 py-2 min-h-[80px]"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#9c7e38] hover:bg-transparent border border-[#9c7e38] text-white hover:text-[#9c7e38] px-4 py-2 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;