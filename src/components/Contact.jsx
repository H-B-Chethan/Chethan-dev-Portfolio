import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    // EmailJS configuration from environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section container">
      <AnimatedSection>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
      </AnimatedSection>

      <div className="contact-layout">
        <AnimatedSection delay={0.1}>
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-desc">
              I'm currently open to full-time roles and internships. If you have
              an opportunity, collaboration idea, or just want to connect, feel
              free to reach out.
              <br />
              <br />
              <span className="subtext">
                I usually respond within 24 hours. Prefer email or LinkedIn for
                quick communication.
              </span>
            </p>

            <div className="contact-methods">
              <div className="contact-method glass">
                <div className="method-icon-box">
                  <Mail size={20} className="method-icon" />
                </div>
                <div>
                  <p className="method-label">Email</p>
                  <a
                    href="mailto:hbchethan24@gmail.com"
                    className="method-value highlight-color"
                  >
                    hbchethan24@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method glass">
                <div className="method-icon-box">
                  <FaLinkedin size={20} className="method-icon" />
                </div>
                <div>
                  <p className="method-label">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/chethanhb7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value highlight-color"
                  >
                    linkedin.com/in/chethanhb7
                  </a>
                </div>
              </div>

              <div className="contact-method glass">
                <div className="method-icon-box">
                  <MapPin size={20} className="method-icon" />
                </div>
                <div>
                  <p className="method-label">Location</p>
                  <p className="method-value">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:hbchethan24@gmail.com"
                className="btn btn-secondary flex-1"
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/chethanhb7/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex-1"
              >
                <FaLinkedin size={18} /> View LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="contact-form-wrapper glass">
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              {/* Anti-spam honeypot field */}
              <input type="text" name="hidden" style={{ display: "none" }} />

              <div className="form-group-row">
                <div className="form-group">
                  <label>NAME</label>
                  <input
                    type="text"
                    name="from_name"
                    className="input-field"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    name="from_email"
                    className="input-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  className="input-field"
                  placeholder="Job Opportunity / Collaboration"
                  required
                />
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea
                  name="message"
                  rows="5"
                  className="input-field"
                  placeholder="Hi Chethan, I came across your portfolio and would like to connect..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                <Send size={18} /> {loading ? "Sending..." : "Send Message"}
              </button>
              {success && (
                <p className="form-status success">
                  Message sent successfully! I'll get back to you within 24
                  hours.
                </p>
              )}
              <p className="form-footer-note">
                Prefer email or LinkedIn for faster response.
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
