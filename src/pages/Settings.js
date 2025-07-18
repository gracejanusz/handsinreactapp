import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import UploadProfilePic from '../components/UploadProfilePic';
import Sidebar from '../components/Sidebar';

export default function SettingsPage() {
  const { userData, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(userData?.name || '');
  const [email, setEmail] = useState(userData?.email || '');

  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  if (loading) return <div style={{ padding: '40px' }}>Loading settings...</div>;
  if (!userData) return <div style={{ padding: '40px' }}>Please log in to view your settings.</div>;

  const handleSave = async () => {
    setSaving(true);
    setStatus('');
    try {
      const userRef = doc(db, 'users', userData.uid);
      await updateDoc(userRef, {
        name,
        email,
      });
      setIsEditing(false);
      setStatus('Changes saved successfully!');
    } catch (error) {
      console.error(error);
      setStatus('Failed to save changes.');
    }
    setSaving(false);
  };

  return (
    <div className="App">
      <Navigation />

      <div style={{ display: 'flex', minHeight: '80vh' }}>
        
      <div style={{ display: 'flex', minHeight: '80vh' }}>
       <Sidebar userData={userData} />
        </div>

        {/* Main Content */}
        <main style={{ flexGrow: 1, padding: '40px 60px', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            {/* Account Info Form */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <h1
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0f52ba',
                  marginBottom: '24px',
                  borderBottom: '1px solid #e2e8f0',
                  paddingBottom: '12px'
                }}
              >
                Account Information
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', display: 'block' }}>Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={!isEditing}
                    style={{
                      backgroundColor: isEditing ? '#fff' : '#f1f5f9',
                      borderColor: isEditing ? '#cbd5e1' : '#e2e8f0',
                      cursor: isEditing ? 'text' : 'default'
                    }}
                  />
                </div>

                {/* Username */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', display: 'block' }}>Username</label>
                  <Input value={userData.username} readOnly style={{ backgroundColor: '#f1f5f9', cursor: 'default' }} />
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', display: 'block' }}>Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly={!isEditing}
                    style={{
                      backgroundColor: isEditing ? '#fff' : '#f1f5f9',
                      borderColor: isEditing ? '#cbd5e1' : '#e2e8f0',
                      cursor: isEditing ? 'text' : 'default'
                    }}
                  />
                </div>

                {/* Password */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', display: 'block' }}>Password</label>
                  <Input
                    type="password"
                    value="passwordplaceholder"
                    readOnly
                    style={{ backgroundColor: '#f1f5f9', cursor: 'default' }}
                  />
                </div>

                {status && (
                  <p style={{ color: status.includes('Failed') ? '#dc2626' : '#16a34a', fontSize: '14px' }}>{status}</p>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {isEditing ? (
                    <Button
                      style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '10px 20px',
                        fontWeight: '500',
                        borderRadius: '8px'
                      }}
                      onClick={handleSave}
                      disabled={saving}
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </Button>
                  ) : (
                    <Button
                      style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '10px 20px',
                        fontWeight: '500',
                        borderRadius: '8px'
                      }}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Upload Photo */}
            <div style={{ width: '180px' }}>
              <UploadProfilePic />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
