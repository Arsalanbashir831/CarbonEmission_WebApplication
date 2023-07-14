import React, { useState, useEffect } from 'react';

const EditForm = ({ name, position, email, password, picture }) => {
  const [formData, setFormData] = useState({
    name: name,
    position: position,
    email: email,
    password: password,
    picture: picture,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      const file = files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));

      // Display image preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (picture) {
      setImagePreview(picture);
    }
  }, [picture]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can handle the form submission and update the user's profile
    // with the new values (e.g., make an API call to update the user data)

    // Reset the form fields
    setFormData({
      name: '',
      position: '',
      email: '',
      password: '',
      picture: null,
    });

    // Clear the image preview
    setImagePreview(null);
  };

  return (
    <div className="editModal absolute flex justify-center items-center h-screen left-[40%]">
      <div className="w-96 p-6 bg-purewhite rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block font-semibold">
              Position:
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="picture" className="block font-semibold">
              Picture:
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {imagePreview && (
            <div className="mb-4">
              <img 
                src={imagePreview}
                alt="Selected"
                className="w-[40px] h-[40px] rounded-lg mb-2"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-main text-white font-semibold rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
