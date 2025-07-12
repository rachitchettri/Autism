import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
  {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-16 bg-[#F5F7FA] gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Not Every Path Looks the Same,
            <br />
            <span className="text-green-600">But Every Step Matters.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Supportive learning tools for children growing at their own pace — and the hearts guiding them every step of the way.
          </p>
          <a
            href="#"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Help Them Grow
          </a>
        </div>
        <div className="flex-1">
          <img
            src="src\assets\kid.png"
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

    
    </div>
  );
}
