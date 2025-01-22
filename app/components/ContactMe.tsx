"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = {};

    if (formData.name.trim().length < 3) {
      valid = false;
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newErrors.email = "Invalid email address.";
    }
    if (formData.message.trim().length < 10) {
      valid = false;
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

try {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.log("error JS Error, bhaago")
      setStatus("error");
      console.error("EmailJS Error:", error);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-3xl shadow-lg max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <motion.input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                variants={inputVariants}
                whileFocus="focus"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                variants={inputVariants}
                whileFocus="focus"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
                placeholder="Write your message"
                variants={inputVariants}
                whileFocus="focus"
              ></motion.textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <motion.div
                  className="h-5 w-5 border-t-2 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-600 text-white rounded-xl flex items-center"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Message sent successfully!
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-600 text-white rounded-xl flex items-center"
            >
              <XCircle className="mr-2 h-5 w-5" />
              Failed to send message. Please try again.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}