"use client";
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false);

            if (data.success) {
                setSuccessMessage("Email sent successfully!");
                console.log(data);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send email. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            alert("An error occurred. Please try again.");
            console.log(error);
        }
    };

    return (
        <section className=" base-container flex items-center justify-center ">
            <form
                onSubmit={handleSubmit}
                className="container w-full  space-y-6 "
            >
                <h1 className="title">
                    Let&apos;s Create Something{" "}
                    <span className="text-[#8B48E8]">Amazing</span>
                </h1>
                <div className="bg-container opacity-95 p-6 rounded-xl space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 ml-1 description"
                        >
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[#474849] text-white rounded-xl block w-full p-3 focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 font-poppins"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 ml-1 description"
                        >
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-[#474849] text-white  rounded-xl block w-full p-3 focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 font-poppins"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 ml-1 description"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Message..."
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-[#474849] text-white font-poppins block w-full min-h-[150px] p-3 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 overflow-hidden resize-none"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 font-bold rounded-xl shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 text-white transition-all"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                        {successMessage && (
                            <p className="mt-2 text-green-400 text-center">
                                {successMessage}
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
