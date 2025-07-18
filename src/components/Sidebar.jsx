import { Link } from 'react-router-dom';

export default function Sidebar({ userData }) {
  if (!userData) return null; // Prevent rendering if userData is undefined

  return (
    <aside
      style={{
        backgroundColor: '#0f52ba',
        width: '240px',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <img
          src={userData.photoURL || '/images/DefaultProfile.png'}
          alt="User"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid white'
          }}
        />
        <div>
          <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', textAlign: 'left' }}>{userData.name}</p>
          <p style={{ fontSize: '18px', color: '#dbeafe', margin: 0 }}>@{userData.username}</p>
        </div>
      </div>

      <nav>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', fontSize: '20px' }}>
          <li className="sidebar-link">
            <Link to="/dashboard" style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%' }}>
              My Profile
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/courses" style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%' }}>
              My Courses
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/settings" style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%' }}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
