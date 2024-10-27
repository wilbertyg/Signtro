import React, { useState } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
    { 
      id: 1, 
      title: 'Course 1', 
      progress: 20, 
      description: 'Description for Course 1',
      circles: [
        { id: 1, link: '/' }, 
        { id: 2, link: '/dictionary' }, 
        { id: 3, link: '/link3' }, 
        { id: 4, link: '/link4' }, 
        { id: 5, link: '/link5' }
      ]
    },
    { 
      id: 2, 
      title: 'Course 2', 
      progress: 40, 
      description: 'Description for Course 2',
      circles: [
        { id: 6, link: '/profile' }, 
        { id: 7, link: '/link7' }, 
        { id: 8, link: '/link8' }, 
        { id: 9, link: '/link9' }, 
        { id: 10, link: '/link10' }
      ]
    },
    { 
      id: 3, 
      title: 'Course 3', 
      progress: 60, 
      description: 'Description for Course 3',
      circles: [
        { id: 11, link: '/link11' }, 
        { id: 12, link: '/link12' }, 
        { id: 13, link: '/link13' }, 
        { id: 14, link: '/link14' }, 
        { id: 15, link: '/link15' }
      ]
    },
    { 
      id: 4, 
      title: 'Course 4', 
      progress: 80, 
      description: 'Description for Course 4',
      circles: [
        { id: 16, link: '/link16' }, 
        { id: 17, link: '/link17' }, 
        { id: 18, link: '/link18' }, 
        { id: 19, link: '/link19' }, 
        { id: 20, link: '/link20' }
      ]
    },
  ];

  const [openCourse, setOpenCourse] = useState(null); 
  const [selectedCourse, setSelectedCourse] = useState(courses[0]); 

  const handleCourseClick = (course) => {
    setOpenCourse(openCourse === course.id ? null : course.id); 
    setSelectedCourse(course); 
  };

  return (
    <div className="courses-container">
      {/* Course List */}
      <div className="course-list">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`course-card ${openCourse === course.id ? 'open' : ''}`}
            onClick={() => handleCourseClick(course)} 
          >
            <h2>{course.title}</h2>
            <p>5 Unit</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}>
                {course.progress}%
              </div>
            </div>

            {/* Dropdown Circles */}
            {openCourse === course.id && (
              <div className="dropdown-content show">
                {course.circles.map(circle => (
                  <div className="circle" key={circle.id}>
                    <Link to={circle.link}>{circle.id}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Course Details Section */}
      <div className="course-details">
        <h2>{selectedCourse.title}</h2>
        <p><strong>Deskripsi Kursus:</strong></p>
        <p>{selectedCourse.description}</p>
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
