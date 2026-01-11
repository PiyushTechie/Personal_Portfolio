import { useState, useRef } from "react";
import SpotlightCard from "../effects/SpotlightCard";
import { Mail, Send, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactSection = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
    bot_check: Yup.string().max(0, "Bot detected"), 
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
      bot_check: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      
      if (values.bot_check.length > 0) {
        console.warn("Bot detected! Submission blocked.");
        setSubmitting(false);
        return;
      }

      setSuccess(false);
      setError(false);

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            resetForm();
            setTimeout(() => setSuccess(false), 5000);
          },
          (err) => {
            console.error("FAILED...", err);
            setError(true);
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <section id="contact" className="py-20 pb-32 relative overflow-hidden font-['EB_Garamond',_serif]">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="text-sky-500">Touch</span>
          </h2>
          <p className="text-zinc-200 text-2xl max-w-2xl mx-auto italic">
            Let's connect: I'm open to projects, collaborations, and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <SpotlightCard className="group">
              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-sky-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="text-sky-400" size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Email</h3>
                <a href="mailto:piyushprajapati7120@gmail.com" className="text-zinc-300 text-lg hover:text-sky-400 transition-colors break-all">
                  piyushprajapati7120@gmail.com
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="group">
              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-sky-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                  <MapPin className="text-sky-400" size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Location</h3>
                <p className="text-zinc-300 text-lg">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="group">
              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-sky-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                  <Phone className="text-sky-400" size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+919920694680" className="text-zinc-300 text-lg hover:text-sky-400 transition-colors font-sans">
                  +91-9920694680
                </a>
              </div>
            </SpotlightCard>
          </div>

          <div className="lg:col-span-2">
            <SpotlightCard className="h-full">
              <div className="p-8 md:p-10 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 h-full">
                <h3 className="text-3xl font-bold text-white mb-6">Send me a message</h3>
                
                <form ref={formRef} onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="absolute opacity-0 -z-10 select-none pointer-events-none h-0 w-0 overflow-hidden">
                    <label htmlFor="bot_check">Do not fill this out if you are human</label>
                    <input
                      type="text"
                      name="bot_check"
                      id="bot_check"
                      value={formik.values.bot_check}
                      onChange={formik.handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-medium text-zinc-300 mb-2">Your Name</label>
                      <input 
                        type="text"
                        name="user_name"
                        placeholder="Enter your name here"
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full bg-zinc-950/50 border rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 font-sans focus:outline-none focus:ring-1 transition-all
                          ${formik.touched.user_name && formik.errors.user_name 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                            : "border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50"
                          }`}
                      />
                      {formik.touched.user_name && formik.errors.user_name && (
                        <p className="text-red-400 text-sm mt-1.5 ml-1 flex items-center gap-1 font-sans">
                          <AlertCircle size={14} />
                          {formik.errors.user_name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-zinc-300 mb-2">Your Email</label>
                      <input 
                        type="email"
                        name="user_email"
                        placeholder="example@gmail.com"
                        value={formik.values.user_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full bg-zinc-950/50 border rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 font-sans focus:outline-none focus:ring-1 transition-all
                          ${formik.touched.user_email && formik.errors.user_email 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                            : "border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50"
                          }`}
                      />
                      {formik.touched.user_email && formik.errors.user_email && (
                        <p className="text-red-400 text-sm mt-1.5 ml-1 flex items-center gap-1 font-sans">
                          <AlertCircle size={14} />
                          {formik.errors.user_email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-zinc-300 mb-2">Your Message</label>
                    <textarea 
                      name="message"
                      rows={6}
                      placeholder="What's on your mind?..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full bg-zinc-950/50 border rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 font-sans focus:outline-none focus:ring-1 transition-all resize-none
                        ${formik.touched.message && formik.errors.message 
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                          : "border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50"
                        }`}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <p className="text-red-400 text-sm mt-1.5 ml-1 flex items-center gap-1 font-sans">
                        <AlertCircle size={14} />
                        {formik.errors.message}
                      </p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`w-full font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group font-sans
                      ${success 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-sky-500 text-white hover:bg-sky-600 hover:scale-[1.01] hover:shadow-lg hover:shadow-sky-500/50'
                      }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                  >
                    {formik.isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : success ? (
                      <>
                        Message Sent!
                        <CheckCircle size={20} />
                      </>
                    ) : error ? (
                      <>
                        Failed to Send
                        <AlertCircle size={20} />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-red-400 text-sm text-center font-sans">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;