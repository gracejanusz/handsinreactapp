// src/pages/Courses.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import { Book, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 👈 import useNavigate

const Courses = () => {
  const navigate = useNavigate(); // 👈 setup navigate hook

  const courses = [
    {
      id: '1',
      title: 'Learn the Alphabet',
      lessons: 6,
      students: 198,
      level: 'Beginner',
      progress: 33,
      imageUrl: '/images/alphabetlesson.jpg'
    },
    {
      id: '2',
      title: 'Greetings',
      lessons: 26,
      students: 412,
      level: 'Beginner',
      progress: 75,
      imageUrl: '/images/stockphoto2.png'
    },
    {
      id: '3',
      title: 'Conversational ASL for Daily Life',
      lessons: 10,
      students: 305,
      level: 'Intermediate',
      progress: 50,
      imageUrl: '/images/stockphoto1.webp'
    }
  ];

  const handleStartCourse = (courseId) => {
    if (courseId === '1') {
      navigate('/lesson/test');
    } else {
      alert('This course is not yet available.'); // or navigate elsewhere if desired
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navigation />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', padding: '2rem' }}>My Courses</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
        {courses.map((course) => (
          <div key={course.id} style={{
            backgroundColor: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            width: '300px',
            paddingBottom: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
          }}>
            <img
              src={course.imageUrl}
              alt={course.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
              }}
            />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{course.title}</h2>
              <div style={{
                display: 'flex',
                gap: '10px',
                fontSize: '0.9rem',
                color: '#475569',
                marginTop: '0.5rem'
              }}>
                <span><Book size={16} style={{ verticalAlign: 'middle' }} /> Lesson: {course.lessons}</span>
                <span><Users size={16} style={{ verticalAlign: 'middle' }} /> {course.students}</span>
                <span><Trophy size={16} style={{ verticalAlign: 'middle' }} /> {course.level}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem'
              }}>
                <button
                  onClick={() => handleStartCourse(course.id)}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Start Course →
                </button>

                <div style={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  border: '2px dashed #d1d5db',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#f97316',
                  fontWeight: 'bold'
                }}>
                  ⭐
                  <span style={{ position: 'absolute', bottom: '-1.2rem', fontSize: '0.75rem' }}>
                    {course.progress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
