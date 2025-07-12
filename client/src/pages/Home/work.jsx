import React from "react";

export default function HowItWorksSection() {
  return (
    <>
      {/* Green Banner Section */}
      <section
        className="flex flex-col md:flex-row items-center justify-between px-24 py-12 max-w-[1500px] mx-auto rounded-lg text-white"
        style={{
          background: "linear-gradient(90deg, #3CB371 0%, #1A4D31 100%)",
        }}
      >
        <div className="flex-1 space-y-2 px-4">
          <h3 className="text-xl font-bold">Create a Profile</h3>
          <p>Add your child’s name, age, and needs.</p>
        </div>
        <div className="flex-1 space-y-2 px-4">
          <h3 className="text-xl font-bold">Get a Personalized Plan</h3>
          <p>We recommend modules based on your input.</p>
        </div>
        <div className="flex-1 space-y-2 px-4">
          <h3 className="text-xl font-bold">How It Works?</h3>
          <p>Getting started is simple.</p>
        </div>
        <div className="flex-1 space-y-2 px-4">
          <h3 className="text-xl font-bold">Start Learning</h3>
          <p>Interactive, calming activities with real-life growth.</p>
        </div>
      </section>

      {/* White Info & Pricing Section */}
      <section className="w-full px-6 md:px-20 py-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">How It Works</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                <strong>Create a Profile</strong> – Add your child’s name, age,
                and needs.
              </li>
              <li>
                <strong>Get a Personalized Plan</strong> – We recommend modules
                based on your input.
              </li>
              <li>
                <strong>Start Learning</strong> – Interactive, calming
                activities with real-life growth.
              </li>
            </ul>
            <p className="text-md text-gray-600">
              Getting started is simple.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Support your child, your way.</h2>
            <p className="text-gray-700">
              Simple, Transparent Pricing — No Surprises
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✅ Unlimited learning modules</li>
              <li>👨‍👩‍👧 Multiple personalized child profiles</li>
              <li>📊 Full learning insights & progress history</li>
              <li>🎯 Smart recommendations based on needs and usage</li>
            </ul>
          </div>

          <div className="bg-teal-50 rounded-lg p-6 space-y-3 text-center">
            <p className="text-sm text-gray-500">Contact for Pricing Details</p>
            <h4 className="text-lg font-semibold text-gray-800">
              🌟 Ready to start their journey?
            </h4>
            <p className="text-gray-600 max-w-xl mx-auto">
              You’ve been helping them every day — we’re just here to walk with
              you.
            </p>
            <a
              href="#"
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-teal-700 transition"
            >
              Create Their Path
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
