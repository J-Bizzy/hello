import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out your name, email, and a message.");
      return false;
    }
    // simple email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess("");

    try {
      // Fallback to opening the user's mail client with a prefilled message.
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:jbizzell09@gmail.com?subject=${encodeURIComponent(subject || "New message from website")}&body=${body}`;
      window.location.href = mailto;

      setSuccess("Opening your mail client...");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again or email hello@jizzell.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Contact</h1>
            <p className="text-muted-foreground mb-8">Have a project or just want to say hi? Send a message below.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border"
                  placeholder="Optional subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border h-40"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {error && <div className="text-sm text-red-500">{error}</div>}
              {success && <div className="text-sm text-green-500">{success}</div>}

              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:scale-105 transition-transform"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
