"use client";

import { useState } from "react";

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
  const [success, setSuccess] = useState<string>("");

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
    if (formData.message.trim().length < 3) {
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
        setErrors({});
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-12 px-6 flex items-center justify-center min-h-screen"
    >
      <form
        className="bg-gray-800 p-8 rounded-3xl shadow-lg w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
        <div>
          <label className="block text-sm mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Write your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl transition"
        >
          Send
        </button>
        {success && (
          <p
            className={`text-center text-sm mt-4 ${
              success.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {success}
          </p>
        )}
      </form>
    </section>
  );
}