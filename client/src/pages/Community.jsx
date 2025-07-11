export default function Community() {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">👨‍👩‍👧 Parent Community</h2>
        <p className="mb-6 text-gray-600">
          Connect with other parents. Share tips, ask questions, and access helpful resources to support your child.
        </p>
  
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">💬 Discussion Forum (Coming Soon)</h3>
          <p className="text-gray-500">
            Soon you'll be able to post questions and get advice from other parents and experts.
          </p>
        </div>
  
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">📚 Downloadable Resources</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-600">
            <li><a href="#" className="underline">Speech Therapy Starter Guide</a></li>
            <li><a href="#" className="underline">Daily Routine Checklist</a></li>
            <li><a href="#" className="underline">List of Local Therapists</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-2xl font-semibold mb-2">📅 Upcoming Parent Webinars</h3>
          <p className="text-gray-500">
            Stay tuned for online sessions with experts. We'll notify you when registrations open!
          </p>
        </div>
      </div>
    );
  }
  