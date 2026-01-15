'use client';

import { useState } from 'react';

interface Testimonial {
  text: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Your team delivered an outstanding betting platform that exceeded our expectations with its seamless functionality and user-friendly design.",
    name: "Stanley Mburu",
    title: "COO, dabocrash.com",
  },
  {
    text: "The developer created an outstanding crypto trading platform for me, featuring smooth performance and excellent security, making it a pleasure to use.",
    name: "Adewoye",
    title: "CEO, Conglex",
  },
  {
    text: "We were thrilled with the tech talent provided by DetaSoft—they delivered highly skilled professionals who perfectly matched our needs and contributed to our team's success.",
    name: "John Luxman",
    title: "Client",
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-dark dark:bg-[#0B1220] text-slate-900 dark:text-white min-h-screen flex flex-col justify-center">
      
      {/* ---------- HERO ---------- */}
      <section className="container mx-auto px-4 py-24 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
        <p className="text-lg text-white/80 dark:text-slate-300 mb-16">
          Discover why startups, crypto projects, and FinTech companies trust our team to deliver innovative solutions.
        </p>

        {/* ---------- Testimonial Card ---------- */}
        <div className="relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-xl max-w-xl mx-auto transition-all duration-500">
          
          <p className="text-lg italic mb-6">"{testimonials[activeIndex].text}"</p>
          
          <div className="text-center">
            <h3 className="font-semibold text-[#814AC8] text-lg">{testimonials[activeIndex].name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[activeIndex].title}</p>
          </div>

          {/* ---------- Navigation Arrows ---------- */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="bg-[#814AC8] dark:bg-[#9D6EDB] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="bg-[#814AC8] dark:bg-[#9D6EDB] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* ---------- Dots ---------- */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === activeIndex ? 'bg-[#814AC8]' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
