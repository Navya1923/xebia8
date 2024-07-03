import React, { useState } from "react";

const PersonalDetails = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Separate handling for name fields and dateOfBirth
    if (id === "dateOfBirth") {
      setForm({ ...form, [id]: value });
    } else {
      const namePattern = /^[A-Za-z]*$/;
      if (namePattern.test(value) || value === "") {
        setForm({ ...form, [id]: value });
      }
    }
  };

  const validateNames = () => {
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(form.firstName)) {
      return "First Name can only contain letters.";
    }
    if (form.middleName && !namePattern.test(form.middleName)) {
      return "Middle Name can only contain letters.";
    }
    if (!namePattern.test(form.lastName)) {
      return "Last Name can only contain letters.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateNames();
    if (nameError) {
      setError(nameError);
      return;
    }

    const dob = new Date(form.dateOfBirth);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
      setError("You must be at least 18 years old to apply.");
    } else {
      setError("");
      // Handle form submission logic
      console.log("Form submitted:", form);
      onSubmit();
    }

    const response = await fetch(`http://localhost:3000/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: form.firstName,
        middlename: form.middleName,
        lastname: form.lastName,
        dob: form.dateOfBirth,
      }),
    });
    console.log(response);
  };

  return (
    <section
      id="personal_details"
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          Personal Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700"
              >
                Middle Name (optional)
              </label>
              <input
                type="text"
                id="middleName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={form.middleName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth*
              </label>
              <input
                type="date"
                id="dateOfBirth"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={form.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalDetails;
