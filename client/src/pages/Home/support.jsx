import React from "react";

export default function JourneyImageSection() {
  return (
    <section className="text-center px-6 md:px-20 py-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        🌟 Ready to start their journey?
      </h2>
      <p className="text-gray-600 mb-10">
        You’ve been helping them every day — we’re just here to walk with you.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <img
          src="/images/kid1.jpg"
          alt="Child 1"
          className="w-40 h-40 object-cover rounded-xl shadow-md"
        />
        <img
          src="/images/kid2.jpg"
          alt="Child 2"
          className="w-40 h-40 object-cover rounded-xl shadow-md"
        />
        <img
          src="/images/kid3.jpg"
          alt="Child 3"
          className="w-40 h-40 object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
