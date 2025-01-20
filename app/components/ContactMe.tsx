"use client";

import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (formData.name.length < 3) {
      valid = false;
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newErrors.email = "Invalid email address.";
    }
    if (formData.message.length < 3) {
      valid = false;
      newErrors.message = "Message must be at least 3 characters.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto flex justify-end">
        <form
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-white">Contact Me</h2>
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
              rows={4}
              placeholder="Write your message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Send
          </button>
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </section>
  );
}