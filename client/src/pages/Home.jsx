import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          💙 Welcome to Autism Welfare Hub
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Empowering children, supporting parents, and connecting organizations — all in one safe, supportive space.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
          >
            Log In
          </Link>
          <Link
            to="/community"
            className="bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700 transition"
          >
            Parent Community
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk1M3wwfDF8c2VhcmNofDJ8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fHx8MTY5MzE0NDA2NA&ixlib=rb-4.0.3&q=80&w=1000"
          alt="Hero illustration"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      {/* Features */}
      <h2 className="text-3xl font-semibold mb-6">✨ What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 border rounded shadow hover:shadow-md transition">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Learning Resources"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
          <p className="text-gray-600">
            Discover activities, tools, and guides to help kids thrive academically and socially.
          </p>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-md transition">
          <img
            src="https://images.unsplash.com/photo-1598232490844-0171f1d9ac88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Parent Support"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">Parent Community</h3>
          <p className="text-gray-600">
            Join discussions, ask questions, and share your experiences with fellow parents.
          </p>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-md transition">
          <img
            src="https://images.unsplash.com/photo-1588776814546-f17db2d8df24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Therapist Support"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">Professional Help</h3>
          <p className="text-gray-600">
            Find trusted therapists and support services to help you navigate your child’s journey.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl font-semibold mb-6">💬 What Parents Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
        <div className="p-6 border rounded shadow bg-white flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Parent"
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="italic text-gray-600 mb-4">
            “This hub helped us feel less alone. The resources are amazing.”
          </p>
          <h4 className="font-bold text-gray-800">Jane D.</h4>
        </div>

        <div className="p-6 border rounded shadow bg-white flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Parent"
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="italic text-gray-600 mb-4">
            “We found great therapists and helpful activities for our son.”
          </p>
          <h4 className="font-bold text-gray-800">Ravi S.</h4>
        </div>

        <div className="p-6 border rounded shadow bg-white flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Parent"
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="italic text-gray-600 mb-4">
            “Love the community! Talking to other parents has been so comforting.”
          </p>
          <h4 className="font-bold text-gray-800">Maria L.</h4>
        </div>
      </div>

      {/* Partners */}
      <h2 className="text-2xl font-semibold mb-6">🤝 Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        <img
          src="https://via.placeholder.com/150x60?text=Partner+1"
          alt="Partner 1"
          className="opacity-70 hover:opacity-100 transition"
        />
        <img
          src="https://via.placeholder.com/150x60?text=Partner+2"
          alt="Partner 2"
          className="opacity-70 hover:opacity-100 transition"
        />
        <img
          src="https://via.placeholder.com/150x60?text=Partner+3"
          alt="Partner 3"
          className="opacity-70 hover:opacity-100 transition"
        />
        <img
          src="https://via.placeholder.com/150x60?text=Partner+4"
          alt="Partner 4"
          className="opacity-70 hover:opacity-100 transition"
        />
      </div>

      {/* Newsletter */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-4">📬 Stay Connected</h2>
        <p className="text-gray-700 mb-6">
          Get weekly updates on tips, stories, and resources from our hub.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 border rounded w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* CTA */}
      <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-4">🌟 Join Us Today</h2>
        <p className="text-gray-700 mb-6">
          Together, we can build a world where every child with autism gets the support they need.
        </p>
        <Link
          to="/register"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Join Now
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t pt-8 mt-12 text-gray-600">
        <p className="mb-4">&copy; 2025 Autism Welfare Hub. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/about" className="hover:text-blue-700">About</Link>
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
          <a href="#" className="hover:text-blue-700">🌐</a>
          <a href="#" className="hover:text-blue-700">🐦</a>
          <a href="#" className="hover:text-blue-700">📘</a>
        </div>
      </footer>
    </div>
  );
}
