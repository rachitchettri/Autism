import React from "react";
import kidImage from "../../assets/kid.png";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-20 pt-16 pb-8 bg-[#F5F7FA] gap-10">
      <div className="flex-1">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Not Every Path Looks the Same,
          <br />
          <span className="text-green-600">But Every Step Matters.</span>
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Supportive learning tools for children growing at their own pace — and the hearts guiding them every step of the way.
        </p>
        <a
          href="#"
          className="inline-block bg-teal-600 text-white px-7 py-3.5 rounded-md text-lg font-semibold hover:bg-teal-700 transition"
        >
          Help Them Grow
        </a>
      </div>
      <div className="flex-1">
        <img
          src={kidImage}
          alt="Hero Illustration"
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </section>
  );
}
