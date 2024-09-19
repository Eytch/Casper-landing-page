import { useState } from "react";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the form data for the mailto link
    const subject = encodeURIComponent(`Support Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    // Construct the mailto link
    const mailtoLink = `mailto:eytch7@gmail.com?subject=${subject}&body=${body}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Reset form data
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto pt-10 textce">
      <div className=" flex justify-center mb-3">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=" flex gap-5">
          <div className=" w-1/2 flex flex-col gap-1">
            <label htmlFor="name" className=" text-lg text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white rounded-md p-2"
              required
            />
          </div>
          <div className=" w-1/2 flex flex-col gap-1">
            <label htmlFor="email" className=" text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded-md p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className=" text-lg text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white rounded-md p-2"
            rows="5"
            placeholder="Your Message..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-md shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Support;
