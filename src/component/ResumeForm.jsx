import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    experience: '',
    image: null // Add image to form data
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    navigate(`/resume?${queryParams}`);
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Enter your education"
            required
          />
        </div>
        <div>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Enter your experience"
            required
          ></textarea>
        </div>
        <div>
          <label>Upload Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}

export default ResumeForm;
