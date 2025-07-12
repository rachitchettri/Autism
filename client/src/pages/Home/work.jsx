import React from "react";
import P1 from '../../assets/p1.jpg';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
export default function HowItWorksSection() {
  return (
    <>
      {/* Green Steps Banner */}
      <section
        className="w-full px-6 md:px-20 py-20 text-white"
        style={{
          background: "linear-gradient(90deg, #3CB371 0%, #1A4D31 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">How It Works?</h2>
            <p className="text-lg opacity-90 mt-2">Getting started is simple</p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            <div className="space-y-2 px-4">
              <h3 className="text-xl font-semibold">📝 Create a Profile</h3>
              <p className="text-base">Add your child’s name, age, and needs.</p>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="text-xl font-semibold">📋 Get a Personalized Plan</h3>
              <p className="text-base">We recommend modules based on your input.</p>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="text-xl font-semibold">🎮 Start Learning</h3>
              <p className="text-base">Interactive, calming activities with real-life growth.</p>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="text-xl font-semibold">💡 You're Never Alone</h3>
              <p className="text-base">We support every step of your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* White Info & Pricing Section */}
      <section className="w-full px-6 md:px-20 py-24 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          {/* Feature List */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold">Support your child, your way.</h2>
            <p className="text-lg text-gray-700">Simple, Transparent Pricing — No Surprises</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-base text-gray-700 text-left">
              <li>✅ <strong>Unlimited learning modules</strong></li>
              <li>🧒 <strong>Multiple personalized child profiles</strong></li>
              <li>📊 <strong>Full learning insights & progress history</strong></li>
              <li>🧠 <strong>Smart recommendations based on needs and usage</strong></li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-white  p-8 md:p-12 space-y-10 text-center ">
            <div className="space-y-3">
              <p className="text-base text-gray-500">Contact for Pricing Details</p>
              <h4 className="text-2xl font-semibold text-gray-800">🌟 Ready to start their journey?</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                You’ve been helping them every day — we’re just here to walk with you.
              </p>
            </div>

            {/* Image Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow bg-white">
                <img
                  src={P1}
                  alt="Child activity 1"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow bg-white">
                <img
                  src={P2}
                  alt="Child activity 2"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow bg-white">
                <img
                  src={P3}
                  alt="Child activity 3"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-teal-700 transition"
              >
                Create Their Path
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
