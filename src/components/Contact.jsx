import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_yauacqc',
        'template_0t1vwmy',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'kRHPWelydYc2NdRCE'
      );

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error('Email error:', err);
      setError('Message send nahi ho saka. Dobara try karein.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary mx-auto mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's build something amazing together!
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind? I'm always open to discussing new
              projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">mariafatimauos123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-5 py-4 bg-card rounded-xl border border-white/5 focus:border-primary outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-5 py-4 bg-card rounded-xl border border-white/5 focus:border-primary outline-none transition-colors"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-5 py-4 bg-card rounded-xl border border-white/5 focus:border-primary outline-none transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary rounded-xl font-medium hover:bg-primary/80 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {sent && (
              <p className="text-green-400 text-center">
                ✅ Message sent! I'll reply soon.
              </p>
            )}
            {error && (
              <p className="text-red-400 text-center">{error}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}