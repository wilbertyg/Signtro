import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
      username: "",
      password: "",
      email: "",
      language: "Bisindo",
  });
    
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLanguageChange = (lang) => {
    setFormData({ ...formData, language: lang });
  };

  const handleSave = () => {
    console.log("Saved Data: ", formData);
  };

  return (
    <div className="alignment">
      <div className="button-row">
        <button className="back-button" onClick={() => navigate("/")}>
          <img src={'./src/assets/back.png'} alt="" />
        </button>
      </div>
      
      <div className="profile-settings">
        <div className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="language-selection">
          <h3>Language</h3>
          <div className="language-options">
            <div
              className={`language-option ${formData.language === "Sibi" ? "active" : ""}`}
              onClick={() => handleLanguageChange("Sibi")}
            >
              <img src="src/assets/sibi.png" alt="Sibi" />
              <p>Sibi</p>
            </div>
            <div
              className={`language-option ${formData.language === "Bisindo" ? "active" : ""}`}
              onClick={() => handleLanguageChange("Bisindo")}
            >
              <img src="src/assets/bisindo.png" alt="Bisindo" />
              <p>Bisindo</p>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="cancel">Cancel</button>
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;