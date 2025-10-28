import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const backendUrl = import.meta.env.VITE_BACKEND_URL || '';

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio' }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus({ loading: false, success: 'Message sent! I will get back to you soon.', error: null });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s Connect</h2>
        <p className="mt-2 text-gray-600">Have a project, idea, or opportunity? Send a message and I’ll reply shortly.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="How can I help?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Write your message..."
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 font-semibold shadow hover:opacity-95 disabled:opacity-60"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {!backendUrl && (
              <span className="text-xs text-amber-600">Backend URL is not set. Set VITE_BACKEND_URL to enable form submission.</span>
            )}
          </div>

          {status.success && <p className="text-green-600 text-sm">{status.success}</p>}
          {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
        </form>
      </div>
    </section>
  );
}
