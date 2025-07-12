import React from "react";
import "./whyThisMatters.css";

export default function FeatureCards() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">Why This Matters?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="feature-heading">🧠 Personalized Learning</h3>
          <p>Modules designed around your child’s needs: speech, shapes, behavior, and more.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="feature-heading">💬 Supportive for Caregivers</h3>
          <p>Simple, step-by-step tools — no tech skills needed.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="feature-heading">🌱 Progress You Can Feel</h3>
          <p>Small wins tracked gently, so you always know they’re growing.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="feature-heading">📚 Research-Backed Methods</h3>
          <p>Built on proven developmental methods and insights from experts and research in child psychology.</p>
        </div>
      </div>
    </section>
  );
}
