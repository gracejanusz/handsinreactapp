import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const { userData, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: '40px' }}>Loading dashboard...</div>;
  }

  if (!userData) {
    return <div style={{ padding: '40px' }}>Please log in to view your dashboard.</div>;
  }

  const loginDates = userData.loginDates || [];

  return (
    <div className="App">
      <Navigation />

      <div style={{ display: 'flex', minHeight: '80vh' }}>
        
      <div style={{ display: 'flex', minHeight: '80vh' }}>
       <Sidebar userData={userData} />
        </div>

        {/* Main Content */}
        <main style={{ flexGrow: 1, padding: '30px', backgroundColor: '#f8fafc' }}>
          {/* Welcome Card */}
          <div
            style={{
              backgroundImage: `url(/images/Aboutheaderbackground.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              color: 'white',
              padding: '40px 30px',
              marginBottom: '30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ margin: 0 }}>Welcome back, {userData.name}</h2>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>Keep up the great work!</p>
            </div>
          </div>

          {/* Word of the Day + Calendar */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            {/* Word of the Day */}
            <div style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', color: "#144aa3" }}>Word of the Day!</h3>
              <p style={{ color: '#2d5cb2' }}>I LOVE YOU</p>
              <img src="/images/ILOVEYOU.jpg" alt="love" style={{ width: '60%' }} />
              <p style={{ marginTop: '10px', color: '#2d5cb2' }}>
                Words learned: <strong>{loginDates.length}</strong>
              </p>
              <button style={{
                marginTop: '10px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Learn More →
              </button>
            </div>

            {/* Calendar */}
            <div style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              fontSize: '18px'
            }}>
              <h3 style={{ fontWeight: 'bold', color: '#144aa3', marginBottom: '20px' }}>My Progress</h3>
              <Calendar
                calendarType="gregory"
                className="custom-calendar"
                tileClassName={({ date, view }) => {
                  if (view === 'month') {
                    const dateStr = date.toISOString().split('T')[0];
                    return loginDates.includes(dateStr) ? 'highlight' : null;
                  }
                }}
                tileDisabled={() => true} 
                activeStartDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)} // lock to current month
                prevLabel={null}
                nextLabel={null}
                showNeighboringMonth={false}
                navigationLabel={({ date }) => date.toLocaleString('default', { month: 'long', year: 'numeric' })}
              />
            </div>
          </div>
{/* Daily Streak */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        marginBottom: '40px'
      }}>
        <h3 style={{ fontWeight: 'bold', color: '#144aa3', textAlign: 'center', marginBottom: '16px' }}>
          Daily Streak
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {Array.from({ length: 7 }).map((_, i) => {
            const today = new Date();
            const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
            const dayDate = new Date(startOfWeek);
            dayDate.setDate(startOfWeek.getDate() + i);

            const dateStr = dayDate.toISOString().split('T')[0];
            const isLoggedIn = loginDates.includes(dateStr);
            const weekdayShort = dayDate.toLocaleDateString('en-US', { weekday: 'short' });

            return (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  margin: '0 auto 6px',
                  backgroundColor: isLoggedIn ? '#facc15' : '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: isLoggedIn ? '#000' : '#9ca3af'
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: '12px', color: '#475569' }}>{weekdayShort}</p>
              </div>
            );
          })}
        </div>
      </div>


        </main>
      </div>

      <Footer />
    </div>
  );
}
