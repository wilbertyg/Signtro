import React from 'react';
import './Courses.css';

export default function Courses() {
  const courses = [
    { id: 1, title: 'Course 1', progress: 20 },
    { id: 2, title: 'Course 2', progress: 20 },
    { id: 3, title: 'Course 3', progress: 20 },
    { id: 4, title: 'Course 4', progress: 20 },
  ];

  return (
    <div className="courses-container">
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>5 Unit</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}>
                {course.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="course-details">
        <h2>Course 1</h2>
        <p><strong>Deskripsi Kursus:</strong></p>
        <p>
          Kursus ini dirancang untuk individu yang baru mengenal bahasa isyarat
          dan ingin memulai perjalanan belajarnya. Kursus ini memberikan pemahaman
          dasar tentang bahasa isyarat, dengan fokus pada kosa kata dasar dan struktur
          kalimat yang digunakan dalam komunikasi sehari-hari.
        </p>
        <p><strong>Apa yang akan Anda pelajari:</strong></p>
        <ul>
          <li>Alfabet dalam bahasa isyarat (spelling jari)</li>
          <li>Salam dasar dan frasa umum</li>
          <li>Pengenalan ekspresi wajah dan bahasa tubuh</li>
          <li>Angka, warna, dan kosa kata penting untuk percakapan sehari-hari</li>
          <li>Tata bahasa dasar dan pembentukan kalimat dalam bahasa isyarat</li>
        </ul>
      </div>
    </div>
  );
}
