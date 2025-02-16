"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles/styles";
import { slideIn } from "../../utils/motion";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = form;

    type ValidationState = { name: boolean; email: boolean; message: boolean };
    const validationState: ValidationState = { name: false, email: false, message: false };

    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;

    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      validationState.name = false;
    } else {
      nameError.classList.add("hidden");
      validationState.name = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim().toLowerCase().match(emailRegex)) {
      emailError.classList.remove("hidden");
      validationState.email = false;
    } else {
      emailError.classList.add("hidden");
      validationState.email = true;
    }

    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      validationState.message = false;
    } else {
      messageError.classList.add("hidden");
      validationState.message = true;
    }

    return Object.values(validationState).every(Boolean);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shiva",
          from_email: form.email.trim().toLowerCase(),
          to_email: "sj.980315@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_KEY
      )
      .then(() => toast.success("Thanks for contacting me."))
      .catch((error) => {
        console.error("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#0d0d2b] p-8 rounded-2xl shadow-lg"
        >
          <p className="text-gray-400 uppercase tracking-wide text-sm font-semibold">
            GET IN TOUCH
          </p>
          <h3 className="text-white text-4xl font-bold mt-1">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                disabled={loading}
                className="bg-[#141432] py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder-gray-500 disabled:bg-opacity-30"
              />
              <span className="text-red-400 mt-2 hidden" id="name-error">Invalid Name!</span>
            </label>

            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                disabled={loading}
                className="bg-[#141432] py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder-gray-500 disabled:bg-opacity-30"
              />
              <span className="text-red-400 mt-2 hidden" id="email-error">Invalid Email!</span>
            </label>

            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                disabled={loading}
                className="bg-[#141432] py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder-gray-500 disabled:bg-opacity-30 disabled:resize-none"
              />
              <span className="text-red-400 mt-2 hidden" id="message-error">Invalid Message!</span>
            </label>

            <button
              type="submit"
              className="bg-blue-600 py-3 px-8 text-white font-bold shadow-md rounded-xl hover:bg-blue-700 transition disabled:bg-opacity-30"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
