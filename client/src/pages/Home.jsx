import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          💙 Autism Welfare Hub
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          A caring community helping every child shine — learn, connect, and grow together.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link
            to="/register"
            className="bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 transition text-lg font-semibold"
          >
            🌟 Start Your Journey
          </Link>
          <Link
            to="/login"
            className="bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition text-lg font-semibold"
          >
            Log In
          </Link>
          <Link
            to="/community"
            className="bg-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 transition text-lg font-semibold"
          >
            Parent Community
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk1M3wwfDF8c2VhcmNofDJ8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fHx8MTY5MzE0NDA2NA&ixlib=rb-4.0.3&q=80&w=1000"
          alt="Hero illustration"
          className="rounded-xl shadow-xl mx-auto"
        />
      </div>

      {/* Features */}
      <h2 className="text-3xl font-bold mb-6 text-teal-800">✨ How We Help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Learning Resources"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-teal-700">Interactive Learning</h3>
          <p className="text-gray-600">
            Fun, engaging activities and tools to help kids learn and grow at their own pace.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1598232490844-0171f1d9ac88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Parent Support"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-teal-700">Supportive Community</h3>
          <p className="text-gray-600">
            Connect with other parents, share stories, and find answers together.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1588776814546-f17db2d8df24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Therapist Support"
            className="rounded mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-teal-700">Expert Guidance</h3>
          <p className="text-gray-600">
            Access trusted therapists and resources for your child’s unique needs.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl font-bold mb-6 text-teal-800">💬 Words from Families</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
        {[
          {
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "“The Hub gave us hope. The activities and support are a blessing.”",
            name: "Jane D."
          },
          {
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "“We discovered amazing tools and caring therapists. Grateful!”",
            name: "Ravi S."
          },
          {
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            text: "“Talking to other parents made us feel understood and supported.”",
            name: "Maria L."
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow bg-white flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="italic text-gray-600 mb-4">{item.text}</p>
            <h4 className="font-bold text-gray-800">{item.name}</h4>
          </div>
        ))}
      </div>

      {/* Subscription Packages */}
      <h2 className="text-3xl font-bold mb-6 text-teal-800">💎 Subscription Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Basic",
            price: "$0",
            features: [
              "Access free learning activities",
              "Join the parent community",
              "Monthly newsletter"
            ],
            cta: "Get Started",
            link: "/register",
            color: "bg-white border"
          },
          {
            title: "Premium",
            price: "$19/mo",
            features: [
              "All free features",
              "Exclusive premium resources",
              "Priority support"
            ],
            cta: "Upgrade Now",
            link: "/subscribe",
            color: "bg-teal-50 border-teal-200"
          },
          {
            title: "Pro",
            price: "$49/mo",
            features: [
              "All premium features",
              "1-on-1 therapist consults",
              "Dedicated family advisor"
            ],
            cta: "Go Pro",
            link: "/subscribe",
            color: "bg-green-50 border-green-200"
          }
        ].map((pkg, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow border ${pkg.color} flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-teal-700">{pkg.title}</h3>
              <p className="text-3xl font-bold mb-4 text-teal-800">{pkg.price}</p>
              <ul className="text-gray-700 mb-6 text-left space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
            </div>
            <Link
              to={pkg.link}
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full shadow hover:bg-teal-700 transition font-semibold"
            >
              {pkg.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-teal-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4 text-teal-800">📬 Stay Inspired</h2>
        <p className="text-gray-700 mb-6">
          Get tips, resources, and stories delivered to your inbox every week.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border rounded w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded shadow hover:bg-teal-700 transition font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* CTA */}
      <div className="bg-green-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4 text-green-800">🌟 Be Part of the Change</h2>
        <p className="text-gray-700 mb-6">
          Together, we can create brighter paths for every child on the autism spectrum.
        </p>
        <Link
          to="/register"
          className="inline-block bg-teal-600 text-white px-10 py-4 rounded-full shadow hover:bg-teal-700 transition text-lg font-semibold"
        >
          Join the Hub
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t pt-8 mt-12 text-gray-600">
        <p className="mb-4">&copy; 2025 Autism Welfare Hub. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <Link to="/about" className="hover:text-teal-700">About</Link>
          <Link to="/contact" className="hover:text-teal-700">Contact</Link>
          <a href="#" className="hover:text-teal-700">🌐</a>
          <a href="#" className="hover:text-teal-700">🐦</a>
          <a href="#" className="hover:text-teal-700">📘</a>
        </div>
      </footer>
    </div>
  );
}
