import { useState } from "react";
import { Mail, Phone } from "lucide-react";

// Predefined list of countries
const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "India", "China",
  "Japan", "Australia", "Brazil", "Mexico", "South Africa", "Russia", "Italy", "Spain",
  "Other" // "Other" triggers the additional input field
];

const Contact = () => {
  // State to handle the conditional "Other" country input field
  const [selectedCountry, setSelectedCountry] = useState("");
  const [otherCountry, setOtherCountry] = useState("");

  // Handler for country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    handleChange(e);
  };
 
const [phoneNumber, setPhoneNumber] = useState("");

const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow digits (remove non-digit characters)
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
     handleChange(e);
};
 //form data
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    otherCountry:""
  });
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    e.preventDefault();
    // Call the backend API to send the email
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <div id="contact" className="  container mx-auto sm:px-8 lg:px-16  text-[#3a5a40] mt-[10px]">
      {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Get in{" "}        
          Touch
      </h2> */}
      <div className="flex-col max-sm:flex-col justify-center md:w-[50%] container mx-auto">
        <div className="p-2 w-full ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium ">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="enter your name"
                className="mt-1 block w-full px-3 py-2 bg-[#999999] placeholder-gray-700 text-black border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                required
              />
            </div>

            {/* Email Address Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium ">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="enter your email"
                className="mt-1 block w-full px-3 py-2 bg-[#999999] text-black placeholder-gray-700 border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
  <label htmlFor="phone" className="block text-lg font-medium ">
    Phone Number
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={phoneNumber}
    placeholder="enter your phone number"
    onChange={handlePhoneChange}
    className="mt-1 block w-full px-3 py-2 placeholder-gray-700 bg-[#999999] text-black border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
    required
  />
</div>

            {/* Country Dropdown Field */}
            <div>
              <label htmlFor="country" className="block text-lg font-medium ">
                Country
              </label>
              <select
                id="country"
                name="country"
                
                className="mt-1 block w-full px-3 py-2 bg-[#999999] text-black border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                onChange={handleCountryChange}
                required
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Conditional "Other" Country Input Field */}
            {selectedCountry === "Other" && (
              <div className="mt-4">
                <label htmlFor="otherCountry" className="block text-lg font-medium ">
                  Please specify your country
                </label>
                <input
                  type="text"
                  id="otherCountry"
                  name="otherCountry"
                  value={otherCountry}
                  onChange={(e) => setOtherCountry(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-[#999999] text-black border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                  required
                />
              </div>
            )}

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-white text-black border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" text-[#dad7cd] text-lg font-bold px-4 py-2 rounded-md bg-[#3a5a40] ring-2 ring-[#3a5a40]   transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="pt-12 w-full flex max-sm:flex-col ">
          <div className="flex mb-6">
            <div className="text-[#dad7cd] mx-6 bg-[#3a5a40] h-10 w-10 p-2 justify-center items-center rounded-full">
              <Mail />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">Email</h5>
              <p className="text-md ">example@email.com</p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="text-[#dad7cd] mx-6 bg-[#3a5a40] h-10 w-10 p-2 justify-center items-center rounded-full">
              <Phone />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">Phone</h5>
              <p className="text-md ">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Contact;

