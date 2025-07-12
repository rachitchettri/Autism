import React from "react";

export default function JourneyCTA() {
  return (
    <section className="relative px-6 md:px-20 py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200">
            <span className="text-2xl animate-bounce">🌟</span>
            <span className="text-sm font-medium text-yellow-800">Their Journey Starts Here</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Ready to start their journey?
          </h2>

          <p className="text-gray-600 text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            You've been helping them every day — we're just here to walk with you.
          </p>

          <div className="flex justify-center gap-2 mb-12">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {[
            { src: "/images/kid1.jpg", alt: "Smiling child learning", delay: "0ms" },
            { src: "/images/kid2.jpg", alt: "Child playing and happy", delay: "200ms" },
            { src: "/images/kid3.jpg", alt: "Joyful child engaged", delay: "400ms" }
          ].map((image, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: image.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="relative w-64 h-64 sm:w-56 sm:h-56 object-cover rounded-3xl shadow-2xl border-4 border-white group-hover:shadow-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            aria-label="Begin Their Adventure"
            className="group relative px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin Their Adventure
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Trusted by thousands of families</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span>4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
